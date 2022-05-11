import { useThree, useFrame } from '@react-three/fiber'
import { CubeCamera, WebGLCubeRenderTarget, RGBFormat, LinearMipmapLinearFilter } from 'three'
import { useAspect } from '@react-three/drei'
import { MeshDistortMaterial } from '@react-three/drei'

export default function Sphere() {
  const [bW, bH] = useAspect(1920, 1920, 0.5)
  const { scene, gl } = useThree()
  // The cubeRenderTarget is used to generate a texture for the reflective sphere.
  // It must be updated on each frame in order to track camera movement and other changes.
  const cubeRenderTarget = new WebGLCubeRenderTarget(256, {
    format: RGBFormat,
    generateMipmaps: true,
    minFilter: LinearMipmapLinearFilter,
  })
  const cubeCamera = new CubeCamera(1, 1000, cubeRenderTarget)
  cubeCamera.position.set(0, 0, 0)
  scene.add(cubeCamera)

  // Update the cubeCamera with current renderer and scene.
  useFrame(() => cubeCamera.update(gl, scene))

  return (
    <mesh visible position={[bW * 1.2, -bH, 0]} rotation={[0, 0, 0]} castShadow>
      <sphereGeometry attach="geometry" args={[5, 400, 100]} />
      <MeshDistortMaterial
        attach="material"
        envMap={cubeCamera.renderTarget.texture}
        color="black
    "
        roughness={0.1}
        metalness={1}
        factor={1}
        speed={10}
      />
      <directionalLight intensity={1} />
    </mesh>
  )
}
