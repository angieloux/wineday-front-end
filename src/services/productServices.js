import winedayAPI from "../config/api";

export const getProducts = async () => {
  try {
    const response = await winedayAPI.get("/products");
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const getProduct = async (id) => {
  try {
    const response = await winedayAPI.get(`/products/${id}`);
    return response.data;
  } catch (err) {
    throw err;
  }
};
