import {
  getAllActiveArticleRepository,
  getAllArticleRepository,
  getAllInactiveArticleRepository,
} from "../../repositories/articles/getAllArticle.repository";

export async function getAllArticleService(active?: boolean) {
  try {
    return active === true
      ? getAllActiveArticleRepository()
      : active === false
        ? getAllInactiveArticleRepository()
        : getAllArticleRepository();
  } catch {
    throw new Error("Erreur base de données");
  }
}
