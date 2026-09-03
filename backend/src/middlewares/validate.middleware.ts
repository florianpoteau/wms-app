import type { Request, Response, NextFunction } from "express";
import type { ZodType } from "zod";

export const validate = (
  schema: ZodType,
  source: "body" | "params" | "query" = "body",
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const data =
      source === "params"
        ? req.params
        : source === "query"
          ? req.query
          : req.body;

    const result = schema.safeParse(data);

    if (!result.success) {
      return res.status(400).json(result.error.issues);
    }

    next();
  };
};
