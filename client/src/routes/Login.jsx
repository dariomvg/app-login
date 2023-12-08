import { useContext, useEffect, useState } from "react";
import { dataLogin } from "../constants/data";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../helpers/post_login";
import { ContextLogin } from "../context/ContextLogin";
import "../styles/form.css";

export const Login = () => {
  const [form, setForm] = useState(dataLogin);
  const [err, setErr] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const { setAuth } = useContext(ContextLogin);
  const navigate = useNavigate();

  const changeLogin = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    try {
      const accessToken = await loginUser(form);
      if (accessToken === undefined) {
        setShowMessage(true);
        setErr("Usuario o contraseña incorrecto");
      } else {
        setAuth(true);
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
      setErr("Usuario o contraseña incorrecto");
      return;
    } finally {
      setForm(dataLogin);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setShowMessage(false);
    }, 5000);
  });

  return (
    <>
      <form onSubmit={submitLogin}>
        <h2>Login</h2>
        {showMessage && <h3>{err}</h3>}
        <input
          type="text"
          placeholder="username"
          name="user"
          value={form.user}
          onChange={changeLogin}
          required
        />
        <input
          type="password"
          placeholder="password"
          name="pass"
          value={form.pass}
          onChange={changeLogin}
          required
        />
        <div className="redirec">
          <label>You do not have an account?</label>
          <Link to="/register" className="link-login">
            Register
          </Link>
        </div>
        <button className="btn" type="submit">
          Login
        </button>
      </form>
    </>
  );
};
