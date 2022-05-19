import { extend } from '@react-three/fiber'
import { useRef } from 'react'
import { Box } from '@react-three/flex'
import { BloomPass } from 'three/examples/jsm/postprocessing/BloomPass'
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass'

import HeightReporter from '../helper/HeightReporter'

import VideoText from '../components/VideoText'
import BackGrid from '../components/BackGrid'

extend({ GlitchPass, BloomPass })

export default function FinalPage({ onReflow, position, planeArgs }) {
  const ref = useRef()
  return (
    <Box dir="row" width="100%" height="100%" align="center" justify="center">
      <HeightReporter onReflow={onReflow} />
      <mesh position={position}>
        <planeBufferGeometry args={planeArgs} />
        <meshBasicMaterial ref={ref} color={'black'} opacity={1} />
        <VideoText bold anchorX="center" anchorY="middle" fontSize={1} lineHeight={1} letterSpacing={-0.05} color="white" />
        <BackGrid />
      </mesh>
    </Box>
  )
}
