import * as THREE from 'three'
import { useState } from 'react'
import { Flex, Box } from '@react-three/flex'
import Text from './Text'

export default function VideoText({ clicked, position, textScaleFactor, ...props }) {
  const [video] = useState(() => {
    const vid = document.createElement('video')
    vid.src = '/name.mp4'
    vid.crossOrigin = 'Anonymous'
    vid.loop = true
    vid.muted = true
    vid.play()
    return vid
  })

  return (
    <group>
      <Flex dir="column" justifyContent="center" position={[0, 0, 0]}>
        <Box>
          <Text bold anchorX="center" anchorY="middle" fontSize={0.5} lineHeight={1} letterSpacing={-0.05} color="white">
            hello@
          </Text>
        </Box>
        <Box>
          <Text bold fontSize={0.5} {...props}>
            deaconpoon.com
            <meshBasicMaterial toneMapped={false}>
              <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
            </meshBasicMaterial>
          </Text>
        </Box>
      </Flex>
    </group>
  )
}
