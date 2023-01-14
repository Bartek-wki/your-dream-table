import mongoose from "mongoose";
 
const orderSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  address:{
    type: String,
    required: true
  },
  order: {
    type: Array,
    required: true
  }
});
 
export default mongoose.model('Order', orderSchema);