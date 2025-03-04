import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose.connect(`${process.env.MONGO_DB_URL}/vastra_e-commerce`);

  mongoose.connection.on("connected", () => {
    console.log(`DB Connected`);
  });
};

export default connectDB;
