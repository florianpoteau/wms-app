import type { Request, Response, NextFunction } from "express";
import type { ZodType } from "zod";

export const validate = (schema: ZodType) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const data = req.params.id ? req.params : req.body;
    const result = schema.safeParse(data);
    console.log(result);

    if (!result.success) {
      return res.status(400).json({
        message: "Données invalides",
        errors: result.error.issues,
      });
    }

    req.body = result.data;

    next();
  };
};
