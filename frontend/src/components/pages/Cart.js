import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import SumupForm from "../features/SumupForm";
import SumupView from "../features/SumupView";
import { deleteOrder } from '../../slices/orders';
import { createOrder } from '../../slices/orders';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const orders = useSelector((state) => state.orders);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const deleteOrderById = (id) => {
    dispatch(deleteOrder(id));
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  const sendOrder = (e) => {
    e.preventDefault();

    const sumup = {
      name: name,
      email: email,
      address: address,
      order: orders,
    };

    try {
      dispatch(createOrder(sumup));
      navigate("/");
    } catch (error) {
      console.log(error);
    }

    setName('');
    setEmail('');
    setAddress('');
  };

  return (
    <section id="sumup-order">
      <div className="columns is-justify-content-center">
        <div className="column is-6-desktop px-5">
          {orders.map(order => <SumupView key={order.id} id={order.id} material={order.material} shape={order.shape} price={order.price} deleteOrderById={deleteOrderById} />)}
        </div>
        <div className="column is-6-tablet is-5-desktop px-5">
          <SumupForm orders={orders} name={name} onChangeName={onChangeName} email={email} onChangeEmail={onChangeEmail} address={address} onChangeAddress={onChangeAddress} sendOrder={sendOrder} />
        </div>
      </div>
    </section>
  )
};

export default Cart;