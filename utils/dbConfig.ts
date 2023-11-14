import mongoose from "mongoose";
const URLs: string = "mongodb://127.0.0.1:27017/tododb";
export const mainConnection = async () => {
  try {
    await mongoose.connect(URLs).then(() => {
      console.log("Database Connected...✈️✈️");
    });
  } catch (error) {
    console.log(error);
  }
};
