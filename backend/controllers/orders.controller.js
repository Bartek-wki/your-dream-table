import Order from "../models/orders.model.js";
import sendMail from "../helpers/sendMail.js";
 
 
export const saveOrder = async (req, res) => {
  try {
    const sumup = req.body;
    const newOrder = new Order(sumup);
    await newOrder.save();
    sendMail(req.body.email, req.body.name, req.body.totalPrice, req.body.address, req.body.order, newOrder._id)
    res.json({ message: 'OK', id: newOrder._id});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}