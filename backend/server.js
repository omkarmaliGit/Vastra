import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/cart", cartRouter);
app.use("/product", productRouter);
app.use("/order", orderRouter);

app.get("/", (req, res) => {
  res.send("server API started");
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
