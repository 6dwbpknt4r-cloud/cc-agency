"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial, Float, Environment } from "@react-three/drei"
import { useRef, useState } from "react"
import * as THREE from "three"

function ParticleStarfield() {
  const ref = useRef<THREE.Points>(null!)
  const [sphere] = useState(() => {
    const arr = new Float32Array(1500 * 3)
    for (let i = 0; i < 1500; i++) {
      const i3 = i * 3
      const radius = 5 + Math.random() * 10
      const theta = 2 * Math.PI * Math.random()
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i3] = radius * Math.sin(phi) * Math.cos(theta)
      arr[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      arr[i3 + 2] = radius * Math.cos(phi)
    }
    return arr
  })

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 20
    ref.current.rotation.y -= delta / 25
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#3b82f6"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  )
}

function FloatingCore() {
  const mesh = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    mesh.current.position.y = Math.sin(time / 2) * 0.2
    mesh.current.rotation.x = Math.sin(time / 4) * 0.3
    mesh.current.rotation.y = Math.cos(time / 2) * 0.3
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={mesh}>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <meshPhysicalMaterial
          color="#1e293b"
          roughness={0}
          metalness={1}
          reflectivity={1}
          clearcoat={1}
          clearcoatRoughness={0}
          transmission={0.8}
          thickness={0.5}
        />
      </mesh>
    </Float>
  )
}

export default function Scene() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#020617] pointer-events-none select-none">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-violet-500/10" />
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: false, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
      >
        <color attach="background" args={["#020617"]} />
        <fog attach="fog" args={["#020617", 5, 15]} />
        
        <ParticleStarfield />
        <FloatingCore />
        
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
        <spotLight position={[0, 5, 0]} angle={0.3} penumbra={1} intensity={2} castShadow />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}
