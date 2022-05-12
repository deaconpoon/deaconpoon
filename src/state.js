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
    { tag: 'my name is', text: `Deacon\nPoon`, shape: <Geo scale={8} position={[10, -8, -5]} /> },
    { tag: 'i am a', text: `Design\nEngineer`, shape: <Sphere /> },
  ],
  depthbox: [
    {
      depth: 0,
      color: '#cccccc',
      textColor: '#ffffff',
      text: 'In a sauce,\nno one could say\nwhy a thing\nonce set in motion\nshould stop anywhere.',
      image: '/images/void.jpg',
    },
    {
      depth: -5,
      textColor: '#272727',
      text: 'Do you like me?',
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
