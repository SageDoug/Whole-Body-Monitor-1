import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io";
import connectDB from "./config/db.js";
import healthRoutes from "./routes/healthRoutes.js";

dotenv.config();
connectDB();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

app.use(cors());
app.use(express.json());
app.use("/api/health", healthRoutes);

io.on("connection", (socket) => {
  console.log("Client connected");

  socket.on("fallDetected", (data) => {
    io.emit("alert", { message: "Fall detected!", data });
  });

  socket.on("heartRateUpdate", (rate) => {
    io.emit("heartRate", rate);
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
