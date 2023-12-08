import { Router } from "express";
import bcrypt from "bcrypt";
import { db } from "../db.js";
import { generateToken } from "../controllers/createToken.js";
const router = Router();

export default router.post("/login", async (req, res) => {
  try {
    const { user, pass } = req.body;
    db.query(
      "SELECT * FROM users WHERE user=?",
      [user],
      async (err, result) => {

        if (err) {
          return res.status(400).json({ error: "No se pudo iniciar Sesión" });
        }
        if (result.length > 0) {

          const userFound = result[0];

          const verifyPassHash = await bcrypt.compare(pass, userFound.pass);

          if (verifyPassHash) {
            const token = generateToken(userFound.id);
            const credenciales = { userFound, token };
            res.status(200).json(credenciales);
          } else {
            res.status(400).json("contraseña o usuario incorrecta");
          }
        } else {
          res.json("Contraseña o usuario incorrecto");
        }
      }
    );
  } catch (error) {
    res.json(error);
  }
});
