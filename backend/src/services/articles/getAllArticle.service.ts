import { getAllArticleRepository } from "../../repositories/articles/getAllArticle.repository";

export async function getAllArticleService(active?: boolean) {
  try {
    const articles = await getAllArticleRepository();
    return articles;
  } catch {
    throw new Error("Erreur base de données");
  }
}
