import { createSlice } from '@reduxjs/toolkit';

export const ordersSlice = createSlice({
  name: 'orders',
  initialState: [],
  reducers: {
    addOrder: (state, action) => {
      const order = action.payload;

      return [...state, order]
    },
    deleteOrder: (state, action) => {
      return state.filter(order => order.id !== action.payload)
    }
  }
})

export const { addOrder } = ordersSlice.actions;
export const { deleteOrder } = ordersSlice.actions;

export default ordersSlice.reducer