import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

const TableTop = ({rotation, position, material, length}) => {

  const colorMap = useLoader(TextureLoader, `${process.env.PUBLIC_URL}/images/material/`+ material +`.png`)

  return (
    <mesh 
      rotation={rotation}
      position={position}
      castShadow
      receiveShadow
    >
      <boxGeometry attach="geometry" args={[6, 0.2, 6 * length]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  )
}

export default TableTop;
