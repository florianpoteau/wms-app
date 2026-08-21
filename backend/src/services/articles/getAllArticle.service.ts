import { getAllArticleRepository } from "../../repositories/articles/getArticle.repository";

export async function getAllArticleService(
  actualPage: number,
  active?: boolean,
) {
  try {
    return getAllArticleRepository(actualPage, active);
  } catch {
    throw new Error("Erreur base de données");
  }
}
