import Order from "../models/orders.model.js";
 
 
export const saveOrder = async (req, res) => {
  try {
    const sumup = req.body;
    const newOrder = new Order(sumup);
    await newOrder.save();
    res.json({ message: 'OK'});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}