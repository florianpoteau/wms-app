import type { Request, Response } from "express";
import { getAllArticleService } from "../../services/articles/getAllArticle.service";
import { createArticleService } from "../../services/articles/createArticle.service";
import { getArticleByid } from "../../services/articles/getArticle.service";
import { updateArticleService } from "../../services/articles/updateArticle.service";
import { deleteArticleService } from "../../services/articles/deleteArticle.service";

export default class ArticleController {
  static getAllArticleController = async (req: Request, res: Response) => {
    const data = res.locals.validated.query;
    const articles = await getAllArticleService(data);
    return res.status(200).json(articles);
  };

  static getArticleByIdController = async (req: Request, res: Response) => {
    const data = res.locals.validated.params;
    const article = await getArticleByid(data.id);
    return res.status(200).json(article);
  };

  static createArticleController = async (req: Request, res: Response) => {
    const data = res.locals.validated.body;
    const result = await createArticleService(data);
    return res.status(201).json(result);
  };

  static updateArticleController = async (req: Request, res: Response) => {
    const data = res.locals.validated;
    const article = await updateArticleService(data.params.id, data.body);

    return res.status(200).json(article);
  };

  static deleteArticleController = async (req: Request, res: Response) => {
    const data = res.locals.validated.params;

    await deleteArticleService(data.id);
    return res.status(200).send();
  };
}
