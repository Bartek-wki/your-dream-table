const Plane = () => {
  return (
    <mesh
      position={[0,-2.5,0]}
      receiveShadow
      rotation={[-Math.PI / 2,0,0]}
    >
      <planeGeometry attach="geometry" args={[1000, 1000]} />
      <meshStandardMaterial color={0xffffff}/>
    </mesh>
  )
}

export default Plane;