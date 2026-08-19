import type { Request, Response } from "express";
import { getArticleByid } from "../../services/articles/getArticle.service";

export const getArticleByIdController = async (req: Request, res: Response) => {
  try {
    const articleId = req.params.id as string;
    const article = await getArticleByid(articleId);
    return res.status(200).json(article);
  } catch (error) {
    return res.status(500).json({
      message: "Une erreur est survenue.",
    });
  }
};
