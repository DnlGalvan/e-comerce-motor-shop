import "reflect-metadata";
import express from "express";
import cors from "cors";
import "express-async-errors";
import handleErrorMiddleware from "./middlewares/handleError.middleware";
import userRoutes from "./routes/users.routes";
import sessionRoutes from "./routes/sessions.routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/users", userRoutes);
app.use("/login", sessionRoutes);

app.use(handleErrorMiddleware);

export default app;
