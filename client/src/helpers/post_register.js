import { url } from "../constants/url";

export const registerUser = async (user) => {
  try {
    const response = await fetch(`${url}/register`, {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error(`El registro falló: ${response.statusText}`);
    }
    return response;
  } catch (error) {
    console.log(error);
    throw new Error("Algo salió mal durante el registro");
  }
};
