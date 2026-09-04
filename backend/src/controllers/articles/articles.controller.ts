import type { Request, Response } from "express";
import { getAllArticleSchema } from "../../validators/articles/getAllArticle.validator";
import { getAllArticleService } from "../../services/articles/getAllArticle.service";
import { createArticleService } from "../../services/articles/createArticle.service";
import { getArticleByid } from "../../services/articles/getArticle.service";
import { updateArticleService } from "../../services/articles/updateArticle.service";
import { deleteArticleService } from "../../services/articles/deleteArticle.service";

export default class ArticleController {
  static getAllArticleController = async (req: Request, res: Response) => {
    const result = getAllArticleSchema.safeParse(req.query);
    if (!result.success) {
      return res.status(400).json(result.error.issues);
    } else {
      const articles = await getAllArticleService(result.data);
      return res.status(200).json(articles);
    }
  };

  static getArticleByIdController = async (req: Request, res: Response) => {
    const articleId = req.params.id as string;
    const article = await getArticleByid(articleId);
    return res.status(200).json(article);
  };

  static createArticleController = async (req: Request, res: Response) => {
    const result = await createArticleService(req.body);
    return res.status(201).json(result);
  };

  static updateArticleController = async (req: Request, res: Response) => {
    const articleId = req.params.id as string;
    const article = await updateArticleService(articleId, req.body);

    return res.status(200).json(article);
  };

  static deleteArticleController = async (req: Request, res: Response) => {
    const articleId = req.params.id as string;
    await deleteArticleService(articleId);
    return res.status(200).send();
  };
}
