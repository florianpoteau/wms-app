import type { Request, Response } from "express";
import { createArticleService } from "../../services/articles/createArticle.service";

export const createArticleController = async (req: Request, res: Response) => {
  try {
    const result = await createArticleService(req.body);

    return res.status(201).json(result);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }

    return res.status(500).json({
      message: "Une erreur est survenue.",
    });
  }
};
