import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import ordersRoutes from "./routes/orders.routes.js";

import sendMail from "./helpers/sendMail.js";
 
const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* API ENDPOINTS */
app.use('/api', ordersRoutes);

/* API ERROR PAGES */
app.use('/api', (req, res) => {
  res.status(404).send({ post: 'Not found...' });
});

// for test
const order = [
  {
    material: 'Wood01',
    shape: 'square',
    price: 199,
  },
  {
    material: 'Wood02',
    shape: 'square',
    price: 199
  }
]

app.use('/test', (req, res) => {
  sendMail('bartosz.wilki2023@gmail.com', order);
});

/* MONGOOSE */
mongoose.connect('mongodb://localhost:27017/your_dream_table_db',{
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));
 
/* START SERVER */
app.listen(8000, () => console.log('Server up and running...'));