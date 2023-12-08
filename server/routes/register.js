import { Router } from "express";
import bcrypt from "bcrypt";
const router = Router();
import { db } from "../db.js";

export default router.post("/register", async (req, res) => {
  try {
    const passHash = await bcrypt.hash(req.body.pass, 10);
    const newUser = {
      email: req.body.email,
      user: req.body.user,
      pass: passHash,
    };
    const { email, user, pass } = newUser;
    console.log(newUser);
    db.query(
      "INSERT INTO users (email, user, pass) VALUES (?, ?, ?)",
      [email, user, pass],
      (err, result) => {
        if (err) {
          res.status(400).json({ error: "No se guardaron los datos", err });
        } else {
          console.log(result);
          res.json(result);
        }
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});
