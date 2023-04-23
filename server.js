import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from "./routes/productRoutes.js";
import cors from 'cors';

// // config env
// // dotenv.config({path:''}) // in same folder
dotenv.config();



// mobgodb config after dotenv.config
connectDB();

// rest object
const app = express();

// middleware
app.use(cors());
app.use(express.json());
// to enable sending json in req and res
app.use(morgan("dev"));
// :method :url :status :response-time ms - :res[content-length]
// no need in production // work when you hit

// routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

// rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

// Port
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(
    `Sever running on ${process.env.DEV_MODE} mode on PORT - ${PORT}`.bgBlue
      .white
  );
});

// import express from 'express'
// import colors from 'colors'
// import dotenv from 'dotenv'
// import morgan from 'morgan'
// import connectDB from './config/db.js'
// import authRoutes from './routes/authRoute.js'

// // config env
// // dotenv.config({path:''}) // in same folder
// dotenv.config()

// // database config
// connectDB()

// // rest object
// const app = express()

// // middleware

// app.use(express.json())
// app.use(morgan('dev'))

// // routes
// app.use('/api/v1/auth', authRoutes);

// // rest api
// app.get('/',(req, res)=>{
//     // res.send(
//     //     {
//     //     message : "Welcome to ecommerse app"
//     //     })
//     res.send("<h1>Welcome to ecommerce app</h1>")
// })

// // Port
// const PORT = process.env.PORT || 8080;

// app.listen(PORT, ()=>{
//     console.log(`Sever running on ${process.env.DEV_MODE} mode on PORT - ${PORT}`.bgBlue.white );
// })
