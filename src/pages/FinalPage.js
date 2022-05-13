import { useThree } from '@react-three/fiber'
import { useRef } from 'react'
import { Box } from '@react-three/flex'

import HeightReporter from '../helper/HeightReporter'
import Text from '../components/Text'
import Ground from '../components/Ground'
import Geo from '../components/Geo'
import Logo from '../components/Logo'

export default function FinalPage({ text, tag, textScaleFactor, onReflow, left = false, shape, position, planeArgs }) {
  const ref = useRef()
  return (
    <Box dir="row" width="100%" height="100%" align="center" justify="center">
      <HeightReporter onReflow={onReflow} />
      <mesh position={position}>
        <planeBufferGeometry args={planeArgs} />
        <meshBasicMaterial ref={ref} color={'white'} opacity={1} />
      </mesh>
      <group position={position}>
        {/*   <Text bold anchorX="center" anchorY="middle" fontSize={1} lineHeight={1} letterSpacing={-0.05} color="black">
          Syncronize
        </Text> */}
        {/* <Logo /> */}
      </group>
    </Box>
  )
}
