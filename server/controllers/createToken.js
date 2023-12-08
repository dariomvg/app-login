import jwt from "jsonwebtoken";
const SECRET = "SECRET_KEY_USER";

export const generateToken = (id) => {
  const token = jwt.sign({ id: id }, SECRET, { expiresIn: 60 * 60 });

  return token;
};
