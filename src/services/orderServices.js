import winedayAPI from "../config/api";

export const createOrder = async (user_id, total) => {
  try {
    const response = await winedayAPI.post("/checkout", {
      user_id,
      total,
    });
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const getOrders = async () => {
  try {
    const response = await winedayAPI.get("/orders");
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const getOrder = async (id) => {
  try {
    const response = await winedayAPI.get(`/orders/${id}`);
    console.log(response.data);
    return response.data;
  } catch (err) {
    throw err;
  }
};
