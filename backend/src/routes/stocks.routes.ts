import { Router } from "express";
import StockController from "../controllers/stock/stockController";
import { validate } from "../middlewares/validate.middleware";
import { getAllStockSchema } from "../validators/stocks/stock.validator";

const router = Router();

router.get(
  "/stocks",
  validate(getAllStockSchema),
  StockController.getAllStockController,
);

export default router;
