import { getAllArticleRepository } from "../../repositories/articles/getArticle.repository";
import type { AllProductInput } from "../../validators/articles/getAllArticle.validator";

export async function getAllArticleService(data: AllProductInput) {
  const { products, totalProducts } = await getAllArticleRepository(data);

  const totalPages = Math.ceil(totalProducts / data.limit);

  return {
    products,
    pagination: {
      page: data.page,
      limit: data.limit,
      totalPages,
      totalProducts,
    },
  };
}
