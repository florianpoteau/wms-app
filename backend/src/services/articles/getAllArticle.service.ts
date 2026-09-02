import { getAllArticleRepository } from "../../repositories/articles/getArticle.repository";

export async function getAllArticleService(data: any) {
  const formattedData = {
    ...data,
    page: Number(data.page),
    limit: Number(data.limit),
  };
  const { products, totalProducts } =
    await getAllArticleRepository(formattedData);

  const totalPages = Math.ceil(totalProducts / formattedData.limit);

  return {
    products,
    pagination: {
      page: formattedData.page,
      limit: formattedData.limit,
      totalPages,
      totalProducts,
    },
  };
}
