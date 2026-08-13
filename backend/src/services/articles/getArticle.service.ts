import { getArticleByIdRepository } from "../../repositories/articles/getArticle.repository";

export async function getArticleByid(id: any) {
  try {
    return await getArticleByIdRepository(id);
  } catch (error) {
    throw new Error("Erreur base de données");
  }
}
