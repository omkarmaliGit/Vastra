import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

const connectCloudinary = async () => {
  dotenv.config();

  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    cloud_api_key: process.env.CLOUDINARY_API_KEY,
    cloud_secret_key: process.env.CLOUDINARY_SECRET_KEY,
  });
};

export default connectCloudinary;
