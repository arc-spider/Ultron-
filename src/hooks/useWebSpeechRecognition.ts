import { useState, useEffect, useRef, useCallback } from 'react';

export type SpeechRecognitionState = 
  | 'UNSUPPORTED'
  | 'PERMISSION_DENIED'
  | 'IDLE'
  | 'CONNECTING'
  | 'LISTENING'
  | 'PROCESSING'
  | 'SPEAKING'
  | 'ERROR';

export interface SpeechRecognitionErrorDetails {
  code: string;
  message: string;
  isFatal: boolean;
  timestamp: number;
}

export interface UseWebSpeechRecognitionOptions {
  continuous?: boolean;
  interimResults?: boolean;
  lang?: string;
  maxAlternatives?: number;
  autoRestart?: boolean;
  autoStart?: boolean;
  onCommand?: (command: string, isFinal: boolean) => void;
  onError?: (error: SpeechRecognitionErrorDetails | string) => void;
  onStateChange?: (state: SpeechRecognitionState) => void;
  isSpeaking?: boolean;
}

export interface UseWebSpeechRecognitionReturn {
  isSupported: boolean;
  state: SpeechRecognitionState;
  isListening: boolean;
  transcript: string;
  interimTranscript: string;
  finalTranscript: string;
  confidence: number;
  error: SpeechRecognitionErrorDetails | null;
  start: () => void;
  stop: () => void;
  toggle: () => void;
  abort: () => void;
  resetTranscript: () => void;
  clearError: () => void;
}

const getSpeechRecognitionClass = (): any => {
  if (typeof window === 'undefined') return null;
  return (
    (window as any).SpeechRecognition ||
    (window as any).webkitSpeechRecognition ||
    (window as any).mozSpeechRecognition ||
    (window as any).msSpeechRecognition ||
    null
  );
};

export function useWebSpeechRecognition(
  options: UseWebSpeechRecognitionOptions = {}
): UseWebSpeechRecognitionReturn {
  const {
    lang = 'en-US',
    autoRestart = true,
    autoStart = true,
    isSpeaking = false,
    onCommand,
    onError,
    onStateChange,
  } = options;

  const [isSupported, setIsSupported] = useState<boolean>(true);
  const [state, setState] = useState<SpeechRecognitionState>('IDLE');
  const [isListening, setIsListening] = useState<boolean>(false);
  const [transcript, setTranscript] = useState<string>('');
  const [interimTranscript, setInterimTranscript] = useState<string>('');
  const [finalTranscript, setFinalTranscript] = useState<string>('');
  const [confidence, setConfidence] = useState<number>(0.95);
  const [error, setError] = useState<SpeechRecognitionErrorDetails | null>(null);

  const onCommandRef = useRef(onCommand);
  onCommandRef.current = onCommand;
  const onErrorRef = useRef(onError);
  onErrorRef.current = onError;
  const onStateChangeRef = useRef(onStateChange);
  onStateChangeRef.current = onStateChange;
  const isSpeakingRef = useRef(isSpeaking);

  useEffect(() => {
    isSpeakingRef.current = isSpeaking;
  }, [isSpeaking]);

  const recognitionRef = useRef<any>(null);
  const isExplicitlyStoppedRef = useRef<boolean>(false);
  const restartTimerRef = useRef<NodeJS.Timeout | null>(null);
  const silenceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isStartedRef = useRef<boolean>(false);

  const updateState = useCallback((newState: SpeechRecognitionState) => {
    setState(newState);
    onStateChangeRef.current?.(newState);
  }, []);

  const safeStart = useCallback(() => {
    if (!recognitionRef.current || isExplicitlyStoppedRef.current) return;
    if (isStartedRef.current) return;

    try {
      recognitionRef.current.start();
      isStartedRef.current = true;
      setIsListening(true);
      updateState('LISTENING');
    } catch (err: any) {
      if (err.name === 'InvalidStateError') {
        isStartedRef.current = true;
        setIsListening(true);
        updateState('LISTENING');
      } else {
        console.warn('[Speech Recognition] Start warning:', err);
      }
    }
  }, [updateState]);

  const stop = useCallback(() => {
    isExplicitlyStoppedRef.current = true;
    isStartedRef.current = false;
    setIsListening(false);
    
    if (restartTimerRef.current) clearTimeout(restartTimerRef.current);
    if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);

    if (recognitionRef.current) {
      try {
        // Abort terminates the active audio stream immediately
        recognitionRef.current.abort();
      } catch (e) {
        try {
          recognitionRef.current.stop();
        } catch (err) {}
      }
    }
    updateState('IDLE');
  }, [updateState]);

  const abort = useCallback(() => {
    stop();
  }, [stop]);

  const start = useCallback(() => {
    const SpeechClass = getSpeechRecognitionClass();
    if (!SpeechClass) {
      setIsSupported(false);
      updateState('UNSUPPORTED');
      return;
    }

    isExplicitlyStoppedRef.current = false;
    setError(null);
    safeStart();
  }, [safeStart, updateState]);

  const toggle = useCallback(() => {
    if (isListening || isStartedRef.current) {
      stop();
    } else {
      start();
    }
  }, [isListening, start, stop]);

  const resetTranscript = useCallback(() => {
    setTranscript('');
    setInterimTranscript('');
    setFinalTranscript('');
  }, []);

  const clearError = useCallback(() => {
    setError(null);
    if (state === 'ERROR' || state === 'PERMISSION_DENIED') {
      updateState('IDLE');
    }
  }, [state, updateState]);

  useEffect(() => {
    const SpeechClass = getSpeechRecognitionClass();
    if (!SpeechClass) {
      setIsSupported(false);
      updateState('UNSUPPORTED');
      const errDetails: SpeechRecognitionErrorDetails = {
        code: 'not-supported',
        message: 'Web Speech API is not supported in this browser.',
        isFatal: true,
        timestamp: Date.now()
      };
      setError(errDetails);
      onErrorRef.current?.(errDetails);
      return;
    }

    const recognition = new SpeechClass();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = lang;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      isStartedRef.current = true;
      setError(null);
      setIsListening(true);
      updateState('LISTENING');
    };

    recognition.onresult = (event: any) => {
      // If Ultron is currently speaking through the speakers, suppress feedback echo
      if (isSpeakingRef.current || isExplicitlyStoppedRef.current) {
        return;
      }

      if (silenceTimerRef.current) {
        clearTimeout(silenceTimerRef.current);
      }

      let currentInterim = '';
      let currentFinal = '';
      let currentConfidence = 0.95;

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        const result = event.results[i];
        if (result.isFinal) {
          currentFinal += result[0].transcript;
          if (result[0].confidence) currentConfidence = result[0].confidence;
        } else {
          currentInterim += result[0].transcript;
          if (result[0].confidence) currentConfidence = result[0].confidence;
        }
      }

      const activeText = (currentFinal || currentInterim).trim();
      setTranscript(activeText);
      setInterimTranscript(currentInterim.trim());
      setConfidence(currentConfidence);

      if (currentFinal.trim().length > 0) {
        const finalCmd = currentFinal.trim();
        setFinalTranscript(finalCmd);
        setInterimTranscript('');
        onCommandRef.current?.(finalCmd, true);
        return;
      }

      // Fast responsive silence trigger (380ms) for lightning-fast 1-second responses
      if (currentInterim.trim().length > 1) {
        onCommandRef.current?.(currentInterim.trim(), false);

        silenceTimerRef.current = setTimeout(() => {
          if (currentInterim.trim() && !isSpeakingRef.current && !isExplicitlyStoppedRef.current) {
            const finalCmd = currentInterim.trim();
            setFinalTranscript(finalCmd);
            setInterimTranscript('');
            onCommandRef.current?.(finalCmd, true);
          }
        }, 380);
      }
    };

    recognition.onerror = (event: any) => {
      const errorCode = event.error;
      
      // Benign non-fatal events
      if (errorCode === 'no-speech' || errorCode === 'aborted') {
        return;
      }

      if (errorCode === 'not-allowed' || errorCode === 'service-not-allowed') {
        isExplicitlyStoppedRef.current = true;
        isStartedRef.current = false;
        setIsListening(false);
        const errDetails: SpeechRecognitionErrorDetails = {
          code: errorCode,
          message: 'Microphone permission blocked. Please enable mic access.',
          isFatal: true,
          timestamp: Date.now()
        };
        setError(errDetails);
        updateState('PERMISSION_DENIED');
        onErrorRef.current?.(errDetails);
        return;
      }

      if (errorCode === 'audio-capture') {
        isExplicitlyStoppedRef.current = true;
        isStartedRef.current = false;
        setIsListening(false);
        const errDetails: SpeechRecognitionErrorDetails = {
          code: errorCode,
          message: 'No microphone detected.',
          isFatal: true,
          timestamp: Date.now()
        };
        setError(errDetails);
        updateState('ERROR');
        onErrorRef.current?.(errDetails);
        return;
      }

      console.warn('[Speech Recognition notice]:', errorCode);
    };

    recognition.onend = () => {
      isStartedRef.current = false;

      // Keep continuous listening alive only if not explicitly stopped by user
      if (!isExplicitlyStoppedRef.current && autoRestart) {
        if (restartTimerRef.current) clearTimeout(restartTimerRef.current);
        restartTimerRef.current = setTimeout(() => {
          if (!isExplicitlyStoppedRef.current) {
            safeStart();
          }
        }, 150);
      } else {
        setIsListening(false);
        updateState('IDLE');
      }
    };

    recognitionRef.current = recognition;

    if (autoStart) {
      isExplicitlyStoppedRef.current = false;
      safeStart();
    }

    return () => {
      isExplicitlyStoppedRef.current = true;
      isStartedRef.current = false;
      if (restartTimerRef.current) clearTimeout(restartTimerRef.current);
      if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
      try {
        recognition.abort();
      } catch (e) {}
    };
  }, [lang, autoStart, autoRestart, safeStart, updateState]);

  return {
    isSupported,
    state,
    isListening,
    transcript,
    interimTranscript,
    finalTranscript,
    confidence,
    error,
    start,
    stop,
    toggle,
    abort,
    resetTranscript,
    clearError
  };
}
