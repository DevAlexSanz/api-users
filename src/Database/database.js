import mongoose from "mongoose";

import "../Config/config.js";

// This function initialize the database connection with MongoDB
const initializeDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      "===============================================\n" +
        `        MongoDB connection is Sucessful!`
    );
  } catch (err) {
    console.log(
      "===============================================\n" +
        `          MongoDB connection error!\n` +
        "===============================================\n" +
        `Error:${err}`
    );
  }
};

export default initializeDB;
