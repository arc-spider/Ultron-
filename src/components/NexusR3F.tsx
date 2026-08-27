import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface NexusR3FProps {
  active: boolean;
  audioData?: Uint8Array;
  intensity?: number;
  parallaxX?: number;
  parallaxY?: number;
  isUnlocked?: boolean;
  personaMode?: 'ultron' | 'jarvis';
  isWakeActive?: boolean;
}

// 3D Audio Spectrum Ring around the Hologram (active on wake & mic reaction)
function AudioSpectrumRing3D({
  audioData,
  intensity = 0,
  isWakeActive = false,
  isUnlocked = false
}: {
  audioData?: Uint8Array;
  intensity?: number;
  isWakeActive?: boolean;
  isUnlocked?: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const barsRef = useRef<THREE.Mesh[]>([]);
  const barCount = 36;

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.z = time * 0.2;
    }

    if (barsRef.current && audioData) {
      for (let i = 0; i < barCount; i++) {
        const mesh = barsRef.current[i];
        if (mesh) {
          const rawIdx = Math.floor((i / barCount) * 32);
          const val = (audioData[rawIdx] || 0) / 255;
          const targetScaleY = isWakeActive
            ? Math.max(0.1, val * 2.2 + intensity * 1.2)
            : Math.max(0.05, (val * 0.5) + 0.05);

          mesh.scale.y = THREE.MathUtils.lerp(mesh.scale.y, targetScaleY, 0.2);
        }
      }
    }
  });

  const radius = 2.1;

  return (
    <group ref={groupRef}>
      {Array.from({ length: barCount }).map((_, i) => {
        const angle = (i / barCount) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <mesh
            key={i}
            ref={(el) => {
              if (el) barsRef.current[i] = el;
            }}
            position={[x, y, 0]}
            rotation={[0, 0, angle + Math.PI / 2]}
          >
            <boxGeometry args={[0.03, 0.5, 0.02]} />
            <meshBasicMaterial
              color={isUnlocked ? "#f59e0b" : "#f97316"}
              transparent
              opacity={isWakeActive ? 0.9 : 0.25}
              blending={THREE.AdditiveBlending}
            />
          </mesh>
        );
      })}
    </group>
  );
}


// Outer Floating Energy Particle Field
function ParticleField({ 
  isUnlocked, 
  personaMode, 
  intensity = 0 
}: { 
  isUnlocked: boolean; 
  personaMode: 'ultron' | 'jarvis'; 
  intensity: number;
}) {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 1200;

  const [positions, scales] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const scl = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const radius = 1.8 + Math.random() * 2.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
      scl[i] = Math.random();
    }
    return [pos, scl];
  }, []);

  const pointColor = personaMode === 'ultron'
    ? (isUnlocked ? '#f59e0b' : '#fb923c')
    : '#00f2ff';

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = time * (isUnlocked ? 0.25 : 0.08);
    pointsRef.current.rotation.x = time * 0.04;
    
    const scaleFactor = 1.0 + intensity * 0.4 + Math.sin(time * 2) * 0.05;
    pointsRef.current.scale.set(scaleFactor, scaleFactor, scaleFactor);
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-scale"
          args={[scales, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color={pointColor}
        transparent
        opacity={isUnlocked ? 0.75 : 0.45}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// Geometric Orbital Energy Rings
function OrbitRings({ 
  isUnlocked, 
  personaMode,
  intensity = 0 
}: { 
  isUnlocked: boolean; 
  personaMode: 'ultron' | 'jarvis';
  intensity: number;
}) {
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);
  const ring3 = useRef<THREE.Mesh>(null);

  const ringColor = personaMode === 'ultron'
    ? (isUnlocked ? '#fbbf24' : '#f97316')
    : '#38bdf8';

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const speed = isUnlocked ? 1.4 : 0.6;
    const pulse = 1 + intensity * 0.3;

    if (ring1.current) {
      ring1.current.rotation.x = time * speed * 0.5;
      ring1.current.rotation.y = time * speed * 0.8;
      ring1.current.scale.set(pulse, pulse, pulse);
    }
    if (ring2.current) {
      ring2.current.rotation.y = -time * speed * 0.7;
      ring2.current.rotation.z = time * speed * 0.4;
      ring2.current.scale.set(pulse * 1.1, pulse * 1.1, pulse * 1.1);
    }
    if (ring3.current) {
      ring3.current.rotation.x = -time * speed * 0.9;
      ring3.current.rotation.z = -time * speed * 0.6;
      ring3.current.scale.set(pulse * 1.2, pulse * 1.2, pulse * 1.2);
    }
  });

  return (
    <group>
      <mesh ref={ring1}>
        <torusGeometry args={[2.0, 0.015, 16, 100]} />
        <meshBasicMaterial 
          color={ringColor} 
          transparent 
          opacity={isUnlocked ? 0.8 : 0.35} 
          blending={THREE.AdditiveBlending} 
        />
      </mesh>
      <mesh ref={ring2}>
        <torusGeometry args={[2.4, 0.012, 16, 100]} />
        <meshBasicMaterial 
          color={ringColor} 
          transparent 
          opacity={isUnlocked ? 0.65 : 0.25} 
          blending={THREE.AdditiveBlending} 
        />
      </mesh>
      <mesh ref={ring3}>
        <torusGeometry args={[2.8, 0.009, 16, 100]} />
        <meshBasicMaterial 
          color={ringColor} 
          transparent 
          opacity={isUnlocked ? 0.5 : 0.18} 
          blending={THREE.AdditiveBlending} 
        />
      </mesh>
    </group>
  );
}

// Dense tangled data-ring shell — the busy "movie Ultron globe" look:
// many thin rings at random orientations, each flickering off its own
// slice of the live audio spectrum plus idle shimmer when quiet.
function DenseHoloShell({
  audioData,
  intensity = 0,
  isWakeActive = false,
  isUnlocked = false,
  active = false,
  color
}: {
  audioData?: Uint8Array;
  intensity?: number;
  isWakeActive?: boolean;
  isUnlocked?: boolean;
  active?: boolean;
  color: string;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const ringRefs = useRef<(THREE.Mesh | null)[]>([]);
  const RING_COUNT = 28;

  const ringConfigs = useMemo(() => {
    return Array.from({ length: RING_COUNT }).map((_, i) => ({
      radius: 1.45 + Math.random() * 1.0,
      tube: 0.0035 + Math.random() * 0.007,
      rotX: Math.random() * Math.PI * 2,
      rotY: Math.random() * Math.PI * 2,
      rotZ: Math.random() * Math.PI * 2,
      spinSpeed: (Math.random() - 0.5) * 0.5,
      spinAxis: Math.floor(Math.random() * 3),
      phase: Math.random() * Math.PI * 2,
      freqBin: Math.floor((i / RING_COUNT) * 30)
    }));
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    ringConfigs.forEach((cfg, i) => {
      const mesh = ringRefs.current[i];
      if (!mesh) return;

      const spin = time * cfg.spinSpeed * (isUnlocked ? 1.5 : 0.75);
      mesh.rotation.x = cfg.rotX + (cfg.spinAxis === 0 ? spin : 0);
      mesh.rotation.y = cfg.rotY + (cfg.spinAxis === 1 ? spin : 0);
      mesh.rotation.z = cfg.rotZ + (cfg.spinAxis === 2 ? spin : 0);

      const audioVal = audioData ? (audioData[cfg.freqBin] || 0) / 255 : 0;
      const shimmer = 0.5 + 0.5 * Math.sin(time * 2.2 + cfg.phase);
      const reactive = active || isWakeActive ? audioVal * 1.3 : 0;
      const baseOpacity = isUnlocked ? 0.5 : 0.28;

      const mat = mesh.material as THREE.MeshBasicMaterial;
      mat.opacity = THREE.MathUtils.clamp(
        baseOpacity * shimmer + reactive * 0.55 + intensity * 0.25,
        0.04,
        1
      );
    });

    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.04;
    }
  });

  return (
    <group ref={groupRef}>
      {ringConfigs.map((cfg, i) => (
        <mesh
          key={i}
          ref={(el) => { ringRefs.current[i] = el; }}
          rotation={[cfg.rotX, cfg.rotY, cfg.rotZ]}
        >
          <torusGeometry args={[cfg.radius, cfg.tube, 6, 72]} />
          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.3}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function NexusR3F({ 
  active, 
  audioData, 
  intensity = 0, 
  parallaxX = 0, 
  parallaxY = 0, 
  isUnlocked = false,
  personaMode = "ultron",
  isWakeActive = false
}: NexusR3FProps) {
  const sceneRef = useRef<THREE.Group>(null);
  const coreMeshRef = useRef<THREE.Mesh>(null);
  const innerSphereRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);

  const isUltron = personaMode === "ultron";
  const coreColor = isUltron 
    ? (isUnlocked ? "#f59e0b" : "#f97316") 
    : "#00f2ff";
  const innerGlowColor = isUltron 
    ? (isUnlocked ? "#fbbf24" : "#f59e0b") 
    : "#006aff";

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Smooth Parallax tracking
    if (sceneRef.current) {
      const targetRotY = (parallaxX * 0.45) + Math.sin(time * 0.4) * 0.04;
      const targetRotX = (-parallaxY * 0.35) + Math.cos(time * 0.4) * 0.04;
      const targetShiftX = parallaxX * 0.4;
      const targetShiftY = parallaxY * 0.3;

      sceneRef.current.rotation.y = THREE.MathUtils.lerp(sceneRef.current.rotation.y, targetRotY, 0.08);
      sceneRef.current.rotation.x = THREE.MathUtils.lerp(sceneRef.current.rotation.x, targetRotX, 0.08);
      sceneRef.current.position.x = THREE.MathUtils.lerp(sceneRef.current.position.x, targetShiftX, 0.08);
      sceneRef.current.position.y = THREE.MathUtils.lerp(sceneRef.current.position.y, targetShiftY, 0.08);
    }

    // Core dynamic pulsation & audio reaction — stronger kick when actually
    // speaking/listening, closer to the movie's "coming alive" reaction
    const reactiveScale = 1.0 + intensity * 0.55 + (active || isWakeActive ? 0.28 : 0);
    const pulseBase = isUnlocked 
      ? 1.25 + Math.sin(time * 4) * 0.05 
      : 1.05 + Math.sin(time * 2) * 0.03;
    const finalScale = pulseBase * reactiveScale;

    if (coreMeshRef.current) {
      coreMeshRef.current.rotation.y = time * (isUnlocked ? 0.7 : 0.3);
      coreMeshRef.current.rotation.z = time * (isUnlocked ? 0.35 : 0.15);
      coreMeshRef.current.scale.lerp(new THREE.Vector3(finalScale, finalScale, finalScale), 0.1);
    }

    if (innerSphereRef.current) {
      innerSphereRef.current.rotation.y = -time * (isUnlocked ? 1.0 : 0.5);
      const innerScale = finalScale * 0.68;
      innerSphereRef.current.scale.lerp(new THREE.Vector3(innerScale, innerScale, innerScale), 0.1);
    }

    if (wireframeRef.current) {
      wireframeRef.current.rotation.x = time * 0.2;
      wireframeRef.current.rotation.y = time * 0.3;
      const wireScale = finalScale * 1.08;
      wireframeRef.current.scale.lerp(new THREE.Vector3(wireScale, wireScale, wireScale), 0.1);
    }
  });

  return (
    <group ref={sceneRef}>
      {/* Ambient and point lights */}
      <ambientLight intensity={isUnlocked ? 0.8 : 0.3} />
      <pointLight 
        position={[0, 0, 0]} 
        color={coreColor} 
        intensity={isUnlocked ? 3.5 : (isWakeActive ? 2.8 : 1.5)} 
        distance={8} 
      />
      <pointLight 
        position={[4, 4, 4]} 
        color={isUnlocked ? "#f97316" : "#38bdf8"} 
        intensity={isUnlocked ? 2.0 : 0.8} 
      />

      {/* Main Distorted Neural Core */}
      <mesh ref={coreMeshRef}>
        <icosahedronGeometry args={[1.1, 8]} />
        <MeshDistortMaterial
          color={coreColor}
          speed={isUnlocked ? 6 : (isWakeActive ? 4.5 : 2.5)}
          distort={isUnlocked ? 0.45 : (isWakeActive ? 0.38 : 0.25)}
          radius={1}
          wireframe={!isUnlocked}
          transparent
          opacity={isUnlocked ? 0.85 : 0.45}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Internal Fiery Energy Nucleus */}
      <mesh ref={innerSphereRef}>
        <sphereGeometry args={[0.9, 32, 32]} />
        <meshBasicMaterial
          color={innerGlowColor}
          transparent
          opacity={isUnlocked ? 0.9 : 0.6}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Outer Holographic Geometric Lattice */}
      <mesh ref={wireframeRef}>
        <octahedronGeometry args={[1.35, 2]} />
        <meshBasicMaterial
          color={coreColor}
          wireframe
          transparent
          opacity={isUnlocked ? 0.4 : 0.2}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* 3D Audio Spectrum Ring (Reactive to live mic input) */}
      <AudioSpectrumRing3D
        audioData={audioData}
        intensity={intensity}
        isWakeActive={isWakeActive}
        isUnlocked={isUnlocked}
      />

      {/* Orbital Concentric Energy Rings */}
      <OrbitRings 
        isUnlocked={isUnlocked} 
        personaMode={personaMode} 
        intensity={intensity} 
      />

      {/* Dense tangled data-ring shell — matches the movie reference globe */}
      <DenseHoloShell
        audioData={audioData}
        intensity={intensity}
        isWakeActive={isWakeActive}
        isUnlocked={isUnlocked}
        active={active}
        color={coreColor}
      />

      {/* Ambient Neural Particle Cloud */}
      <ParticleField 
        isUnlocked={isUnlocked} 
        personaMode={personaMode} 
        intensity={intensity} 
      />
    </group>
  );
}
