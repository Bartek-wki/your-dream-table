import Form from "../features/Form";
import CreateTable from "../features/CreateTable";
import { useState } from "react"

const Home = () => {
  const [material, setMaterial] = useState("Wood01");
  const [shape, setShape] = useState("square");

  const materialChange = e => {
    setMaterial(e.target.value);
  }
  
  const shapeChange = e => {
    setShape(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ material: material, shape: shape });
  }

  return (
    <section id="create-your-table">
      <div className="columns">
        <CreateTable material={material} shape={shape} />
        <Form material={material} materialChange={materialChange} shape={shape} shapeChange={shapeChange} handleSubmit={handleSubmit} />
      </div>
    </section>
  )
};

export default Home;