import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
//used fo rmiddlwware and configaration
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  }),
);
app.use(express.json({ limit: "16Kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("./public"));
app.use(cookieParser());

//cookie parser is is used to perform crud operation on the cookie of the bworser ,
//to set cookie values, server will read and will produce the cookie

//route
import userRouter from "./routes/user.routes.js";

//routes decalration

app.use("/api/v1/users",userRouter)

//when ever uesr come to the path http://localhost:port/api/v1/users/ then i will call the userRouter for further processing

export { app };
