import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import contactRoutes from "./routes/contactRoutes.js";

import {
  notFound,
  errorHandler,
} from "./middleware/errorMiddleware.js";

const app = express();

app.disable("x-powered-by");

app.use(helmet());

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

const allowedOrigins = [
  process.env.CLIENT_URL,
  "http://localhost:5173",
].filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      if (
        !origin ||
        allowedOrigins.includes(origin)
      ) {
        return callback(null, true);
      }

      return callback(
        new Error("Not allowed by CORS")
      );
    },

    methods: ["GET", "POST"],
  })
);

app.use(
  express.json({
    limit: "20kb",
  })
);

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Portfolio API is running",
  });
});


app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

app.use("/api/contact", contactRoutes);

app.use(notFound);

app.use(errorHandler);

export default app;