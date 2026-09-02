import type { Request, Response } from "express";
import { getAllArticleService } from "../../services/articles/getAllArticle.service";

export const getAllArticleController = async (req: Request, res: Response) => {
  try {
    const articles = await getAllArticleService(req.query);

    if (articles.products.length === 0) {
      return res.status(204).send();
    } else {
      return res.status(200).json(articles);
    }
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
