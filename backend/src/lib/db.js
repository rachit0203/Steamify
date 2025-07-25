import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGOURI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        
    } catch (error) {
        console.log("Error in connecting to Mongo DB" , error);
        process.exit(1);
    }
} 