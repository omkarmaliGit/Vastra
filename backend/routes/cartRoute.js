import { Router } from "express";

import {
  addToCart,
  updateCart,
  getUserCart,
} from "../controllers/cartController.js";
import authUser from "../middleware/auth.js";

const cartRouter = Router();

cartRouter.post("/add", authUser, addToCart);
cartRouter.put("/update", authUser, updateCart);
cartRouter.get("/getUser", authUser, getUserCart);

export default cartRouter;
