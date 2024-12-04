import mongoose from "mongoose";
import config from "../config/config.js";
import logger from "../utils/logger.utils.js";

const connectDB = async () => {
  try {
    logger.info("Connecting to MongoDB");
    mongoose.set("strictQuery", false);
    if (!config.MONGODB_URI) throw new Error("MONGODB_URI is not defined");
    mongoose.connect(config.MONGODB_URI);
    logger.info("Connected to MongoDB");
  } catch (error) {
    logger.error("Error connecting to MongoDB: ", error.message);
  }
};

export default connectDB;