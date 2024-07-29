//require('dotenv').config({path:'./env'})

import dotenv from "dotenv";
import connectDB from "./db/index.js";

connectDB()

/* approch-1 to connect database in index.js
async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error:", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listning on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("Error:", error);
    throw error;
  }
};
*/
