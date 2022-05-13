import { useThree } from '@react-three/fiber'
import { Box } from '@react-three/flex'
import { useAspect } from '@react-three/drei'
import HeightReporter from '../helper/HeightReporter'
import Text from '../components/Text'
import Logo from '../components/Logo'

export default function Page({ text, tag, textScaleFactor, onReflow, left = false, shape }) {
  const { viewport } = useThree()
  const [bW, bH] = useAspect(1920, 1920, 0.5)

  return (
    <Box dir="column" align={left ? 'flex-start' : 'flex-end'} justify="flex-start" width="100%" height="auto" minHeight="100%">
      <HeightReporter onReflow={onReflow} />

      <Box dir="row" width="100%" height="auto" justify={left ? 'flex-start' : 'flex-end'} margin={0} grow={1} wrap="wrap">
        {shape}
      </Box>
      <Box marginLeft={1.5} marginRight={1.5} marginTop={2}>
        <Text position={[left ? 1 : -1, 0.5, 1]} fontSize={textScaleFactor} lineHeight={1} letterSpacing={-0.05} maxWidth={(viewport.width / 4) * 3}>
          {tag}
          <meshBasicMaterial color="#cccccc" toneMapped={false} />
        </Text>
      </Box>
      <Box marginLeft={left ? 1.5 : 1} marginRight={left ? 1 : 1.5} marginBottom={1}>
        <Text
          bold
          position-z={0.5}
          textAlign={left ? 'left' : 'right'}
          fontSize={1.5 * textScaleFactor}
          lineHeight={1}
          letterSpacing={-0.05}
          color="black"
          maxWidth={(viewport.width / 4) * 3}>
          {text}
        </Text>
      </Box>
    </Box>
  )
}
