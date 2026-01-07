// import { OrbitControls } from '@react-three/drei'
// import { Canvas } from '@react-three/fiber'
// import React from 'react'
// import { useMediaQuery } from 'react-responsive'
// import { Room } from './Room'
// import HeroLights from './HeroLights'

// const HeroExpi = () => {
//     const isTablet = useMediaQuery({query: '(max-width: 1024px)'})
//     const isMobile = useMediaQuery({query: '(max-width: 768px)'})
//   return (
//     <Canvas camera={{position: [0,0,15],fov: 45}}>

//     <OrbitControls
//     enablePan={false}
//     enableZoom={!isTablet}
//     maxDistance={20}
//     minDistance={5}
//     minPolarAngle={Math.PI/5}
//     maxPolarAngle={Math.PI/2}
//     />
//     <HeroLights/>
//     <group
//     scale={isMobile ? 0.7 : 1}
//     position={[0,-3.5,0]}
//     rotation={[0,-Math.PI/4, 0]}
//     >

//       <Room/>
//     </group>


//     </Canvas>
//   )
// }

// export default HeroExpi

import React from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import { Room } from './Room'
import HeroLights from './HeroLights'


const Controls = ({ isTablet }) => {
  const { invalidate } = useThree()

  return (
    <OrbitControls
      makeDefault
      enablePan={false}
      enableZoom={!isTablet}
      maxDistance={20}
      minDistance={5}
      minPolarAngle={Math.PI / 5}
      maxPolarAngle={Math.PI / 2}
      onChange={invalidate} // render ONLY when user interacts
    />
  )
}

//  Main render 
const HeroExpi = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <Canvas
      frameloop="demand" // 
      dpr={[1, 1.5]} // 
      camera={{ position: [0, 0, 15], fov: 45 }}
      gl={{
        antialias: false, //
        powerPreference: 'high-performance'
      }}
    >
      <Controls isTablet={isTablet} />
      <HeroLights />

      <group
        scale={isMobile ? 0.7 : 1}
        position={[0, -3.5, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        <Room />
      </group>
    </Canvas>
  )
}

export default HeroExpi
