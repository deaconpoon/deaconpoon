import { useLayoutEffect } from 'react'
import { useFlexSize } from '@react-three/flex'

export default function HeightReporter({ onReflow }) {
  const size = useFlexSize()
  useLayoutEffect(() => onReflow && onReflow(...size), [onReflow, size])
  return null
}
