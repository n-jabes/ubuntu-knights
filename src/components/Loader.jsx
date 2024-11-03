import React from 'react'
import {Html} from '@react-three/drei'

const Loader = () => {
  return (
    <mesh className='flex items-center justify-center'>
        <mesh className='w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin'/>
    </mesh>
  )
}

export default Loader