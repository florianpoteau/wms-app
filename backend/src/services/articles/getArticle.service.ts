import { getArticleByIdRepository } from "../../repositories/articles/getArticle.repository";

export async function getArticleByid(id: string) {
  return await getArticleByIdRepository(id);
}
