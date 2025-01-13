import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect("mongodb+srv://user1:1231232121@cluster0.p77k9.mongodb.net/tomato")
    .then(() => console.log("DB connected"));
};
