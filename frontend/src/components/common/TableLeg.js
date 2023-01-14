import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';


const TableLeg = ({rotation, position, material}) => {
  
  const colorMap = useLoader(TextureLoader, `${process.env.PUBLIC_URL}/images/material/`+material+`.png`)

  return (
    <mesh 
      rotation={rotation}
      position={position}
      castShadow
      receiveShadow 
    >
      <boxGeometry attach="geometry" args={[0.5, 5, 0.5]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  )
}

export default TableLeg;