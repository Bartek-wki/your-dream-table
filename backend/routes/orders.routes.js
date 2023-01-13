import express from "express";

import {saveOrder} from "../controllers/orders.controller.js"; 

const router = express.Router();
 
router.post('/users', saveOrder);
 
export default router;