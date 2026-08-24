import { getAllArticleRepository } from "../../repositories/articles/getArticle.repository";

export async function getAllArticleService(
  actualPage: number,
  limite: number,
  active?: boolean,
  search?: string,
) {
  try {
    const { products, totalProducts } = await getAllArticleRepository(
      actualPage,
      limite,
      active,
      search,
    );

    const totalPages = Math.ceil(totalProducts / limite);

    return {
      products,
      pagination: {
        page: actualPage,
        limit: limite,
        totalPages,
        totalProducts,
      },
    };
  } catch {
    throw new Error("Erreur base de données");
  }
}
