import { storeAxios } from "./config";
export async function getAllProduct(page = 1) {
  let { data } = await storeAxios.get(`products?page=${page}`);
  return data;
}

export async function getProductById(id) {
  let { data } = await storeAxios.get(`products/${id}`);
  return data;
}

export async function searchProduct(query) {
  try {
    let { data } = await storeAxios.get(
      `products/search?name=${query.movie}&minPrice=${
        query.minPrice
      }&maxPrice=${query.maxPrice === "max" ? "" : query.maxPrice}&category=${
        query.category
      }`
    );
    return data.products;
  } catch (error) {
    return [];
  }
}
