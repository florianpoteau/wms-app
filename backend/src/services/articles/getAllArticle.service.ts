import { getAllArticleRepository } from "../../repositories/articles/getArticle.repository";

export async function getAllArticleService(
  actualPage: number,
  limite: number,
  active?: boolean,
  search?: string,
) {
  if (limite > 20 || limite < 1) {
    throw new Error("Limite doit être comprise entre 1 et 20");
  } else {
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
  }
}
