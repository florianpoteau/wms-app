import express from "express";
import authRoutes from "./routes/auth.routes";
import routes from "./routes/routes";

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api", routes);

export default app;
