import * as THREE from 'three'
import { useEffect } from 'react'
import { useThree } from '@react-three/fiber'
import { Plane, MeshDistortMaterial } from '@react-three/drei'

export default function BackGrid() {
  return (
    <Plane position={[0, -1, 0]} rotation={[90, 0, 0]} args={[8, 6, 160, 240]}>
      <MeshDistortMaterial distort={0.5} speed={2} color="white" wireframe side={THREE.DoubleSide} />
    </Plane>
  )
}
