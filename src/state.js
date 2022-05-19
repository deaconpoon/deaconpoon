import Geo from './components/Geo'
import Sphere from './components/Sphere'

const state = {
  top: 0,
  pages: 0,
  threshold: 4,
  mouse: [0, 0],
  content: [
    {
      tag: 'welcome',
      text: `Human`,
    },
    { tag: 'my name is', text: `Deacon\nPoon`, shape: <Geo scale={10} position={[10, -16, -8]} /> },
    { tag: 'i am a', text: `Design\nEngineer`, shape: <Sphere /> },
  ],
  depthbox: [
    {
      depth: 0,
      color: '#cccccc',
      textColor: '#ffffff',
      text: 'Passionate about how\ndesign come to life\nand\nto create accessible\nproducts for all.',
      image: '/images/void.jpg',
    },
    {
      depth: -5,
      textColor: '#272727',
      text: `Let's synchronize?`,
      image: '/images/void.jpg',
    },
  ],
  lines: [
    {
      points: [
        [-20, 0, 0],
        [-9, 0, 0],
      ],
      color: 'black',
      lineWidth: 0.5,
    },
    {
      points: [
        [20, 0, 0],
        [9, 0, 0],
      ],
      color: 'black',
      lineWidth: 0.5,
    },
  ],
}

export default state
