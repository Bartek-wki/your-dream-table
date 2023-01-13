import mongoose from "mongoose";
 
const orderSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  material:{
    type: String,
    required: true
  },
  size:{
    type: String,
    required: true
  }
});
 
export default mongoose.model('Order', orderSchema);