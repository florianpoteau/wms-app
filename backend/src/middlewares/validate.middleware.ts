import type { Request, Response, NextFunction } from "express";
import type { ZodType } from "zod";

export const validate = (
  schema: ZodType,
  source: "body" | "params" = "body",
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const data = source === "params" ? req.params : req.body;

    const result = schema.safeParse(data);

    if (!result.success) {
      return res.status(400).send();
    }

    if (source === "body") {
      req.body = result.data;
    }

    next();
  };
};
