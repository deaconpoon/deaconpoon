import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Loader, Preload, Html } from '@react-three/drei'

import Effects from './components/Effects'
import Content from './pages/Content'
import state from './state'

export default function App() {
  const scrollArea = useRef()
  const onScroll = (e) => (state.top = e.target.scrollTop)
  useEffect(() => void onScroll({ target: scrollArea.current }), [])
  const [pages, setPages] = useState(0)

  return (
    <>
      <Canvas
        shadows
        raycaster={{ enabled: false }}
        dpr={[1, 2]}
        camera={{ position: [0, 0, 10], far: 1000 }}
        gl={{ powerPreference: 'high-performance', alpha: false, antialias: false, stencil: false, depth: false }}
        onCreated={({ gl }) => gl.setClearColor('#f5f5f5')}>
        <pointLight position={[-10, -10, -10]} intensity={1} />
        <ambientLight intensity={0.4} color="#FFFDF6" />
        <spotLight
          castShadow
          angle={0.4}
          penumbra={1}
          position={[0, 10, 20]}
          intensity={4}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <Suspense
          fallback={
            <Html>
              <div />
            </Html>
          }>
          <Preload all />
          <Content onReflow={setPages} />
        </Suspense>
        <Effects />
      </Canvas>
      <div
        className="scrollArea"
        ref={scrollArea}
        onScroll={onScroll}
        onPointerMove={(e) => (state.mouse = [(e.clientX / window.innerWidth) * 2 - 1, (e.clientY / window.innerHeight) * 2 - 1])}>
        <div style={{ height: `${pages * 100}vh` }} />
      </div>
      <Loader />
    </>
  )
}
