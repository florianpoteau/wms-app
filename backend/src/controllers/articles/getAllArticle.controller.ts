import type { Request, Response } from "express";
import { getAllArticleService } from "../../services/articles/getAllArticle.service";
import { getAllArticleSchema } from "../../validators/articles/getAllArticle.validator";

export const getAllArticleController = async (req: Request, res: Response) => {
  const result = getAllArticleSchema.safeParse(req.query);
  if (!result.success) {
    return res.status(400).json(result.error.issues);
  } else {
    const articles = await getAllArticleService(result.data);
    if (articles.products.length === 0) {
      return res.status(204).send();
    } else {
      return res.status(200).json(articles);
    }
  }
};
