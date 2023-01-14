import { configureStore } from '@reduxjs/toolkit'
import ordersReducer from './slices/orders';

const reducer = {
  orders: ordersReducer
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;