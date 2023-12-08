import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextLogin } from "../context/ContextLogin";
import "../styles/header.css";

export const Header = () => {

  const {auth} = useContext(ContextLogin); 

  const logout = () => {
    const token = localStorage.getItem("token");
    if (token) {
      localStorage.removeItem("token");
      window.location.reload(true);
    };
  };

  return (
    <header>
      <Link className="link" to="/">Principal</Link>
      <Link className="link" to="/dashboard">Dashboard</Link>
      {auth && <button className="btn-link" onClick={logout}>logout</button>}
      {auth ? null : <Link className="link" to="/register">Register</Link>}
      {!auth && <Link className="link" to="/login">Login</Link>}
      
    </header>
  );
};
