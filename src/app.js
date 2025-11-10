import express from "express";
import cors from "cors";
import morgan from "morgan";
import entriesRouter from "./routes/entries.routes.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/health", (req, res) => res.json({ status: "ok" }));

app.use("/api/entries", entriesRouter);

app.use(notFound);
app.use(errorHandler);

export default app;
