import winedayAPI from "../config/api";

export const createOrder = async (user_id, total, number) => {
  try {
    const response = await winedayAPI.post("/checkout", {
      user_id,
      total,
      number,
    });
    return response.data;
  } catch (err) {
    throw err;
  }
};
