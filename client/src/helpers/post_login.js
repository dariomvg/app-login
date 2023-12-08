import { url } from "../constants/url";
import { saveToken } from "./saveToken";

export const loginUser = async (user) => {
  try {
    const response = await fetch(`${url}/login`, {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify(user),
    });
    const credenciales = await response.json();
    if (credenciales.token) {
      const accessToken = await saveToken(credenciales.token);
      return accessToken;
    }
  } catch (error) {
    console.log(error);
  }
};
