import React from 'react';
import birdScene from '../assets/3d/bird.glb';
import { useGLTF } from '@react-three/drei';

const Bird = () => {
  const { scene, animations } = useGLTF(birdScene);

  return (
    <mesh position={[-1.5, 1, 0.5]} scale={[0.002, 0.002, 0.002]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
