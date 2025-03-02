import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log(`DB Connected : ${process.env.MONGO_DB_URL}`);
  });

  await mongoose.connect(`${process.env.MONGO_DB_URL}/vastra_e-commerce`);
};

export default connectDB;
