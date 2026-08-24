import type { Request, Response } from "express";
import { getAllArticleService } from "../../services/articles/getAllArticle.service";

export const getAllArticleController = async (req: Request, res: Response) => {
  try {
    const search = req.query.search as string;
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;
    const active =
      req.query.active === "true"
        ? true
        : req.query.active === "false"
          ? false
          : undefined;

    const articles = await getAllArticleService(page, limit, active, search);

    if (articles.products.length === 0) {
      return res.status(204).send();
    } else {
      return res.status(200).json(articles);
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        message: error.message,
      });
    }

    return res.status(500).json({
      message: "Une erreur est survenue.",
    });
  }
};
