import { useState } from "react";
import { dataRegister } from "../constants/data";
import { registerUser } from "../helpers/post_register";
import { Link, useNavigate } from "react-router-dom";
import "../styles/form.css";

export const Register = () => {
  const [form, setForm] = useState(dataRegister);
  const navigate = useNavigate();

  const changeRegister = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(form);
      if (response.ok) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setForm(dataRegister);
    }
  };

  return (
    <>
      <form onSubmit={submitRegister}>
        <h2>Register</h2>
        <input
          type="email"
          placeholder="email..."
          name="email"
          value={form.email}
          onChange={changeRegister}
          className="input-register"
          required
        />
        <input
          type="text"
          placeholder="username..."
          name="user"
          value={form.user}
          onChange={changeRegister}
          className="input-register"
          required
        />
        <input
          type="password"
          placeholder="password..."
          name="pass"
          value={form.pass}
          onChange={changeRegister}
          className="input-register"
          required
        />
        <div className="redirec">
          <label>You have an account?</label>
          <Link to="/login" className="link-login">
            Login
          </Link>
        </div>
        <button className="btn" type="submit">
          Register
        </button>
      </form>
    </>
  );
};
