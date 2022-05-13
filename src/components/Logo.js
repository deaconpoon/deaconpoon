/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ scale, ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Logo.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={scale * 0.008}>
        <mesh geometry={nodes.text002.geometry} material={materials.Material_0} />
        <mesh geometry={nodes.text003.geometry} material={materials.Material_0} />
        <mesh geometry={nodes.text004.geometry} material={materials.Material_0} />
        <mesh geometry={nodes.text005.geometry} material={materials.Material_0} />
        <mesh geometry={nodes.text006.geometry} material={materials.Material_1} />
        <mesh geometry={nodes.text007.geometry} material={materials.Material_1} />
        <mesh geometry={nodes.text008.geometry} material={materials.Material_1} />
        <mesh geometry={nodes.text009.geometry} material={materials.Material_1} />
        <mesh geometry={nodes.text010.geometry} material={materials.Material_1} />
        <mesh geometry={nodes.text011.geometry} material={materials.Material_0} />
        <mesh geometry={nodes.text012.geometry} material={materials.Material_1} />
        <mesh geometry={nodes.text013.geometry} material={materials.Material_1} />
        <mesh geometry={nodes.text014.geometry} material={materials.Material_1} />
        <mesh geometry={nodes.text015.geometry} material={materials.Material_2} />
        <mesh geometry={nodes.text016.geometry} material={materials.Material_1} />
        <mesh geometry={nodes.text017.geometry} material={materials.Material_1} />
        <mesh geometry={nodes.text018.geometry} material={materials.Material_1} />
        <mesh geometry={nodes.text019.geometry} material={materials.Material_1} />
        <mesh geometry={nodes.text020.geometry} material={materials.Material_0} />
        <mesh geometry={nodes.text021.geometry} material={materials.Material_3} />
        <mesh geometry={nodes.text022.geometry} material={materials.Material_1} />
        <mesh geometry={nodes.text023.geometry} material={materials.Material_4} />
        <mesh geometry={nodes.text024.geometry} material={materials.Material_0} />
        <mesh geometry={nodes.text025.geometry} material={materials.Material_0} />
        <mesh geometry={nodes.text026.geometry} material={materials.Material_0} />
        <mesh geometry={nodes.text027.geometry} material={materials.Material_0} />
        <mesh geometry={nodes.text028.geometry} material={materials.Material_0} />
        <mesh geometry={nodes.text029.geometry} material={materials.Material_0} />
        <mesh geometry={nodes.text030.geometry} material={materials.Material_0} />
        <mesh geometry={nodes.text031.geometry} material={materials.Material_1} />
        <mesh geometry={nodes.text032.geometry} material={materials.Material_0} />
        <mesh geometry={nodes.text033.geometry} material={materials.Material_1} />
        <mesh geometry={nodes.text034.geometry} material={materials.Material_1} />
        <mesh geometry={nodes.text035.geometry} material={materials.Material_0} />
        <mesh geometry={nodes.text036.geometry} material={materials.Material_1} />
        <mesh geometry={nodes.text037.geometry} material={materials.Material_0} />
        <mesh geometry={nodes.text038.geometry} material={materials.Material_1} />
        <mesh geometry={nodes.text039.geometry} material={materials.Material_1} />
        <mesh geometry={nodes.text040.geometry} material={materials.Material_1} />
        <mesh geometry={nodes.text041.geometry} material={materials.Material_1} />
        <mesh geometry={nodes.text042.geometry} material={materials.Material_0} />
        <mesh geometry={nodes.text043.geometry} material={materials.Material_1} />
        <mesh geometry={nodes.text044.geometry} material={materials.Material_1} />
        <mesh geometry={nodes.text045.geometry} material={materials.Material_3} />
        <mesh geometry={nodes.text046.geometry} material={materials.Material_0} />
        <mesh geometry={nodes.text047.geometry} material={materials.Material_0} />
        <mesh geometry={nodes.text048.geometry} material={materials.Material_0} />
        <mesh geometry={nodes.text049.geometry} material={materials.Material_0} />
        <mesh geometry={nodes.text050.geometry} material={materials.Material_0} />
      </group>
    </group>
  )
}

useGLTF.preload('/Logo.gltf')