import mongoose from "mongoose";

const connectDB = async () => {
    const Uri="mongodb://localhost:27017/portfolio";
  try {
    await mongoose.connect(Uri);

    console.log("MongoDB Connected");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

export default connectDB;