import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({});
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js"
import companyRoute from "./routes/company.route.js"
import jobRoute from "./routes/job.route.js"
import applicationRoute from "./routes/application.route.js"
const app = express();


//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors({
  origin: 'http://localhost:5173', // Ensure this matches your frontend origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true // This allows credentials (cookies, headers, etc.)
}));

app.options('*', cors());


const PORT = process.env.PORT || 3000;


//api for user.
app.use("/api/v1/user", userRoute);


//api for company.
app.use("/api/v1/company", companyRoute);

//api for job.
app.use("/api/v1/job", jobRoute);

//api for application.
app.use("/api/v1/application", applicationRoute);

//HERE inside the listen we have to pass one callback function and the portnumber.
app.listen(PORT, () => {
  connectDB();
  console.log(`Server running at port ${PORT}`);
})

