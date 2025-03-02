import { Router } from "express";
import {
  addProduct,
  listProduct,
  removeProduct,
  singleProduct,
} from "../controllers/productController";

const productRouter = Router;

productRouter.post("/add", addProduct);
productRouter.get("/", listProduct);
productRouter.get("/list", singleProduct);
productRouter.delete("/remove", removeProduct);

export default productRouter;
