import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ordersDataService from '../services/orders.service';

export const createOrder = createAsyncThunk(
  "orders/create",
  async (data) => {
    const res = await ordersDataService.create(data);
    return res.data;
  }
);

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
  },
  extraReducers: {
    [createOrder.fulfilled]: (state, action) => {
      return []
    }
  }
})

export const { addOrder } = ordersSlice.actions;
export const { deleteOrder } = ordersSlice.actions;

export default ordersSlice.reducer