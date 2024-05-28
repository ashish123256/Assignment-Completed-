import mongoose from "mongoose";

const Connection = () => {
    console.log("Connecting to MongoDB...");

    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
       
    });

    mongoose.connection.on('connected', () => {
        console.log("Mongoose connected to MongoDB");
    });

    mongoose.connection.on('disconnected', () => {
        console.log("Mongoose disconnected from MongoDB");
    });

    mongoose.connection.on('error', (err) => {
        console.error("Mongoose connection error:", err);
    });
}

export default Connection;
