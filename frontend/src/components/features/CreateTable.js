import PropTypes from 'prop-types';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Canvas, useThree, extend } from 'react-three-fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import TableLeg from '../common/TableLeg';
import TableTop from '../common/TableTop';
import Plane from '../common/Plane';

extend({ OrbitControls });

const Scene = ({material, shape, sumup}) => {
  const {
    camera,
    gl: { domElement }
  } = useThree();

  const gltf = useLoader(GLTFLoader, `${process.env.PUBLIC_URL}/models/Strawberry_gltf.gltf`)

  let tableLength;

  shape === 'rectangle' ? tableLength = 2 : tableLength = 1;

  return (
    <>
      <ambientLight />
      <pointLight castShadow intensity={0.3} position={[-5, 10, 10]} />
      <TableLeg rotation={[0, 0, 0]} position={[2.6, 0, 2.6 * tableLength]} material={material} />
      <TableLeg rotation={[0, 0, 0]} position={[2.6, 0, -2.6 * tableLength]} material={material} />
      <TableLeg rotation={[0, 0, 0]} position={[-2.6, 0, 2.6 * tableLength]} material={material} />
      <TableLeg rotation={[0, 0, 0]} position={[-2.6, 0, -2.6 * tableLength]} material={material} />
      <TableTop rotation={[0, 0, 0]} position={[0, 2.6, 0]} material={material} length={tableLength} />
      {!sumup && <primitive position={[0, 2.7, 0]} scale={[0.1, 0.1, 0.1]} object={gltf.scene} />}
      <Plane />
      {!sumup && <orbitControls
        args={[camera, domElement]}
        minPolarAngle={0}
        maxPolarAngle={Math.PI - Math.PI / 2}
        maxDistance={100}
      />}
    </>
  )
}

function CreateTable({material, shape, sumup = false}) {
  
  return (
    <Canvas shadows camera={{ position: [6, 5, 8], fov: 70}}>
      <Scene material={material} shape={shape} sumup={sumup} />
    </Canvas>      
  );
}

CreateTable.propTypes = {
  material: PropTypes.string,
  shape: PropTypes.string,
  sumup: PropTypes.bool,
};

export default CreateTable;
