import { useEffect, useRef, useState } from 'react';

export interface AudioAnalyzerResult {
  intensity: number;
  frequencies: Uint8Array;
  waveform: Uint8Array;
  peakDb: number;
}

export function useAudioAnalyzer(isActive: boolean, isSpeaking: boolean): AudioAnalyzerResult {
  const [intensity, setIntensity] = useState(0);
  const [frequencies, setFrequencies] = useState<Uint8Array>(() => new Uint8Array(64));
  const [waveform, setWaveform] = useState<Uint8Array>(() => new Uint8Array(64));
  const [peakDb, setPeakDb] = useState(-60);

  const analyserRef = useRef<AnalyserNode | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const lastUpdateRef = useRef<number>(0);
  const isSpeakingRef = useRef<boolean>(isSpeaking);
  const isActiveRef = useRef<boolean>(isActive);

  useEffect(() => {
    isSpeakingRef.current = isSpeaking;
  }, [isSpeaking]);

  useEffect(() => {
    isActiveRef.current = isActive;
  }, [isActive]);

  useEffect(() => {
    let animationId: number;
    let isCancelled = false;

    const stopHardwareMic = () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => {
          try {
            track.enabled = false;
            track.stop();
          } catch (e) {}
        });
        streamRef.current = null;
      }
      if (audioContextRef.current) {
        try {
          if (audioContextRef.current.state !== 'closed') {
            audioContextRef.current.close().catch(() => {});
          }
        } catch (e) {}
        audioContextRef.current = null;
      }
      analyserRef.current = null;
    };

    const setupAnalyzer = async () => {
      try {
        if (!navigator.mediaDevices?.getUserMedia) return;
        if (!isActive || isCancelled) return;

        const stream = await navigator.mediaDevices.getUserMedia({ 
          audio: {
            echoCancellation: true,
            noiseSuppression: true,
            autoGainControl: true
          } 
        });

        if (isCancelled || !isActiveRef.current) {
          stream.getTracks().forEach(t => t.stop());
          return;
        }

        streamRef.current = stream;
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const audioContext = new AudioContextClass();
        audioContextRef.current = audioContext;
        const source = audioContext.createMediaStreamSource(stream);
        const analyser = audioContext.createAnalyser();
        analyser.fftSize = 128;
        analyser.smoothingTimeConstant = 0.75;
        source.connect(analyser);
        analyserRef.current = analyser;
      } catch (err) {
        console.warn("Microphone access for audio visualizer not active or refused:", err);
      }
    };

    if (isActive) {
      setupAnalyzer();
    } else {
      stopHardwareMic();
    }

    const update = () => {
      const now = performance.now();
      
      // Throttle frequency updates to 20ms (~50fps) for ultra-fast reaction
      if (now - lastUpdateRef.current >= 20) {
        lastUpdateRef.current = now;
        let currentIntensity = 0;
        const freqArray = new Uint8Array(64);
        const waveArray = new Uint8Array(64);

        if (isActiveRef.current && analyserRef.current) {
          analyserRef.current.getByteFrequencyData(freqArray);
          analyserRef.current.getByteTimeDomainData(waveArray);
          
          let sum = 0;
          for (let i = 0; i < freqArray.length; i++) {
            sum += freqArray[i];
          }
          currentIntensity = sum / freqArray.length / 255;
          
          const maxVal = Math.max(...freqArray);
          const db = maxVal > 0 ? Math.round(20 * Math.log10(maxVal / 255)) : -60;
          setPeakDb(db);
        } else {
          // When mic is disabled or idle, flat/ambient resting wave
          for (let i = 0; i < 64; i++) {
            waveArray[i] = 128 + Math.sin(now * 0.003 + i * 0.2) * (isSpeakingRef.current ? 12 : 2);
          }
          setPeakDb(-60);
        }

        // When Ultron is speaking, synthesize robotic frequency waves
        if (isSpeakingRef.current) {
          const speechIntensity = 0.45 + Math.random() * 0.4;
          currentIntensity = Math.max(currentIntensity, speechIntensity);
          
          for (let i = 0; i < 64; i++) {
            const simulated = (0.45 + Math.sin(now * 0.02 + i * 0.35) * 0.55) * 255 * currentIntensity;
            freqArray[i] = Math.max(freqArray[i], simulated);
            waveArray[i] = 128 + Math.sin(now * 0.025 + i * 0.45) * (currentIntensity * 65);
          }
        }

        setIntensity(prev => Math.abs(prev - currentIntensity) > 0.01 ? currentIntensity : prev);
        setFrequencies(freqArray);
        setWaveform(waveArray);
      }

      animationId = requestAnimationFrame(update);
    };

    animationId = requestAnimationFrame(update);

    return () => {
      isCancelled = true;
      cancelAnimationFrame(animationId);
      stopHardwareMic();
    };
  }, [isActive]);

  return { intensity, frequencies, waveform, peakDb };
}
