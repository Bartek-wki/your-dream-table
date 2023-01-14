import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';

import TableForm from "../features/TableForm";
import CreateTable from "../features/CreateTable";
import { useState, useEffect } from "react"
import { addOrder } from "../../slices/orders";

const Home = () => {
  const [material, setMaterial] = useState("Wood01");
  const [shape, setShape] = useState("square");
  const [price, setPrice] = useState(199);
  
  const dispatch = useDispatch();

  const materialChange = e => {
    setMaterial(e.target.value);
  }
  
  const shapeChange = e => {
    setShape(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addOrder({id: uuid(), material: material, shape: shape, price: price }));
  }

  useEffect(() => {
    shape === "square" ? setPrice(199) : setPrice(250);

  }, [shape])

  return (
    <section id="create-your-table">
      <div className="columns">
        <div className="column is-two-thirds canvas-container px-5">
          <CreateTable material={material} shape={shape} />
        </div>
        <div className="column px-5">
          <TableForm material={material}
            materialChange={materialChange}
            shape={shape}
            shapeChange={shapeChange}
            handleSubmit={handleSubmit}
            price={price}
          />          
        </div>
      </div>
    </section>
  )
};

export default Home;