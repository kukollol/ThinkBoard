import express from "express";
import notesRoutes from "./Routes/notesRouts.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";
// Importing express and the notes routes
dotenv.config(); // Load environment variables from .env file
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors());
app.use(rateLimiter);

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Server is running on http://localhost:3000");
  });
}); // Connect to the MongoDB database
