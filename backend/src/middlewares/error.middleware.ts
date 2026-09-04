import type { NextFunction, Request, Response } from "express";
import AppError from "../error/AppError.middleware";

export const errorHandling = (
  error: AppError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      message: error.message,
    });
  }

  return res.status(500).json({
    message: "Une erreur est survenue.",
  });
};
