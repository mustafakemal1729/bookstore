import mongoose from "mongoose";
import dotenv, { config } from "dotenv"


dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("db connection established")
    }
    catch(error) {
        console.log("connection has failed", error.message);
        throw error;
    }
}

export default connectDB;