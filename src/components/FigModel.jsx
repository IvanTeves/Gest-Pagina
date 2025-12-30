import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function FigModel(props) {
  const { nodes, materials } = useGLTF('/figProject.glb')
  const group = useRef()
  
  // Store mouse position in a ref to avoid re-renders (perf)
  const mouse = useRef({ x: 0, y: 0 })

  React.useEffect(() => {
    const handleMouseMove = (event) => {
      // Normalize mouse (-1 to 1)
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useFrame((state) => {
    if (group.current) {
      const scrollY = window.scrollY
      const time = state.clock.getElapsedTime()
      
      // Use our global mouse tracking
      const mouseX = mouse.current.x
      const mouseY = mouse.current.y

      // Calculate distance from center (0,0) for "hover" effect
      const dist = Math.sqrt(mouseX * mouseX + mouseY * mouseY)
      // If mouse is within ~30% of screen center, consider it "hovered"
      const isHoveredLike = dist < 0.3
      const targetScale = isHoveredLike ? 1.15 : 1

      // 1. Rotation Logic
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        (scrollY * 0.005) + (time * 0.1) + (mouseX * 0.8),
        0.05
      )
      
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        mouseY * 0.3, 
        0.05
      )

      // 2. Scale Logic (Distance based)
      // Apply base scale from props * dynamic hover scale
      const baseScale = props.scale || 1
      const currentScale = baseScale * targetScale
      
      group.current.scale.x = THREE.MathUtils.lerp(group.current.scale.x, currentScale, 0.1)
      group.current.scale.y = THREE.MathUtils.lerp(group.current.scale.y, currentScale, 0.1)
      group.current.scale.z = THREE.MathUtils.lerp(group.current.scale.z, currentScale, 0.1)
    }
  })

  // Destructure props to safely pass others to group
  const { scale, ...otherProps } = props;

  return (
    <group 
      ref={group} 
      {...otherProps} 
      dispose={null}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.higo.geometry}
        material={nodes.higo.material || materials['default']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tallo.geometry}
        material={nodes.tallo.material || materials['default']}
      />
    </group>
  )
}

useGLTF.preload('/figProject.glb')
