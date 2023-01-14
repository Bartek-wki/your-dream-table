import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import SumupForm from "../features/SumupForm";
import SumupView from "../features/SumupView";
import { deleteOrder } from '../../slices/orders';

const Cart = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders)

  const deleteOrderById = (id) => {
    dispatch(deleteOrder(id));
  }

  return (
    <section id="sumup-order">
      <div className="columns is-justify-content-center">
        <div className="column is-6-desktop px-5">
          {orders.map(order => <SumupView key={order.id} id={order.id} material={order.material} shape={order.shape} price={order.price} deleteOrderById={deleteOrderById} />)}
        </div>
        <div className="column is-6-tablet is-5-desktop px-5">
          <SumupForm orders={orders} />
        </div>
      </div>
    </section>
  )
};

export default Cart;