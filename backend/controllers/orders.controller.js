import Order from "../models/orders.model.js";
 
 
export const saveOrder = async (req, res) => {
  try {
    const order = req.body;
    const newOrder = new Order(order);
    await order.save();
    res.json({ message: 'OK', id: newOrder._id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}