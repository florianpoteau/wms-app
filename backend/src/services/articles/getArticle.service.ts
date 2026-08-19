import { getArticleByIdRepository } from "../../repositories/articles/getArticle.repository";

export async function getArticleByid(id: string) {
  try {
    return await getArticleByIdRepository(id);
  } catch (error) {
    throw new Error("Erreur base de données");
  }
}
