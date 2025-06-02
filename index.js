import express from "express";
import cors from "cors";
import db from './config/database.js';
import cookieParser from 'cookie-parser';

import userRoutes from "./routes/userRoute.js";
import makananRoutes from "./routes/makananRoute.js";

import dotenv from "dotenv";
dotenv.config();

const app = express(); 
app.use(cookieParser());

app.use(cors({
    origin: true, // ganti sesuai frontend kamu
    credentials: true
}));

app.use(express.json());

// Routes
app.use("/api", userRoutes);
app.use("/api", makananRoutes);

// Sync DB dan mulai server
db.sync().then(() => console.log("Database synced"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
