import type { Request, Response } from "express";
import { updateArticleService } from "../../services/articles/updateArticle.service";

export const updateArticleController = async (req: Request, res: Response) => {
  try {
    const articleId = req.params.id as string;
    await updateArticleService(articleId, req.body);
    return res.status(200).json({
      message: "L'article a été modifié",
    });
  } catch (error) {
    if (error instanceof Error && error.message === "ARTICLE_NOT_FOUND") {
      return res.status(404).send();
    }
    if (error instanceof Error && error.message === "REFERENCE_ALREADY_EXIST") {
      return res.status(409).json({
        message: "This reference already exists",
      });
    }
    if (error instanceof Error && error.message === "BARCODE_ALREADY_EXIST") {
      return res.status(409).json({
        message: "This barcode is already in use",
      });
    }
    return res.status(500).json({
      message: "Une erreur est survenue",
    });
  }
};
