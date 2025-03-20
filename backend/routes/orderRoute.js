import { Router } from "express";
import {
  placeOrderCOD,
  placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
  verifyStripe,
  verifyRazorpay,
} from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";

const orderRouter = Router();

orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

orderRouter.post("/placecod", authUser, placeOrderCOD);
orderRouter.post("/placestripe", authUser, placeOrderStripe);
orderRouter.post("/placerazorpay", authUser, placeOrderRazorpay);

orderRouter.post("/userorders", authUser, userOrders);

orderRouter.post("/verifyStripe", authUser, verifyStripe);
orderRouter.post("/verifyRazorpay", authUser, verifyRazorpay);

export default orderRouter;
