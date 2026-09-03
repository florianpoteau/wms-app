import express from "express";
import authRoutes from "./routes/auth.routes";
import loginRoutes from "./routes/login.routes";
import articleRoutes from "./routes/articles.routes";
import supplierRoutes from "./routes/suppliers.routes";
import cookieParser from "cookie-parser";
import { authMiddleware } from "./middlewares/validateJwt.middleware";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", loginRoutes);

app.use(authMiddleware);

app.use("/api/auth", authRoutes);

app.use("/api", articleRoutes);
app.use("/api", supplierRoutes);

export default app;
