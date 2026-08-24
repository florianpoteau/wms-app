import { getAllArticleRepository } from "../../repositories/articles/getArticle.repository";

export async function getAllArticleService(
  actualPage: number,
  limite: number,
  active?: boolean,
) {
  try {
    return getAllArticleRepository(actualPage, limite, active);
  } catch {
    throw new Error("Erreur base de données");
  }
}
