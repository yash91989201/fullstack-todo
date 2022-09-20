import mongoose from "mongoose";

function connectDB() {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected to database"))
    .catch((err) => console.log(err));
}

export default connectDB;
