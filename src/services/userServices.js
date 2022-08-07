import winedayAPI from "../config/api";

export const logInUser = async (loginDetails) => {
  try {
    const response = await winedayAPI.post("/auth/login", loginDetails);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const retrieveUserFromJWT = async () => {
  try {
    const jwt = sessionStorage.getItem("jwt");
    const response = await winedayAPI.post("/auth/logged_in_user", { jwt });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export async function signUp(data) {
  const response = await winedayAPI.post("/auth/register", data);
  return response.data;
}
