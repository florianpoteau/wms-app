import type { Request, Response } from "express";
import { deleteArticleService } from "../../services/articles/deleteArticle.service";

export const deleteArticleController = async (req: Request, res: Response) => {
  try {
    const articleId = req.params.id as string;
    await deleteArticleService(articleId);
    return res.status(200).send();
  } catch (error) {
    if (error instanceof Error && error.message === "ARTICLE_NOT_FOUND") {
      return res.status(404).send();
    }
    return res.status(500).json({
      message: "Une erreur est survenue",
    });
  }
};
