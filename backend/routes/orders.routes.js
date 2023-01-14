import express from "express";

import {saveOrder} from "../controllers/orders.controller.js"; 

const router = express.Router();
 
router.post('/orders', saveOrder);
 
export default router;