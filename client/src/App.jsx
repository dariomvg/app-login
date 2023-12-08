import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Register } from "./routes/Register";
import { Login } from "./routes/Login";
import { Dashboard } from "./routes/Dashboard";
import { Header } from "./routes/Header";
import { Principal } from "./routes/Principal";
import "./styles/App.css";
import { ContextLogin } from "./context/ContextLogin";

function App() {

  const {auth, setAuth} = useContext(ContextLogin); 

  useEffect(() => {
    const token = localStorage.getItem("token");
    setAuth(token);
  }, []);

  return (
    <section className="wrapper">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Principal />} />
          {!auth && <Route path="/register" element={<Register />} />}
          {!auth && <Route path="/login" element={<Login />} />}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<h1>404 - Page not found</h1>} />
          <Route />
        </Routes>
      </Router>
    </section>
  );
}

export default App;
