import { FaHome, FaChartBar, FaCog } from 'react-icons/fa';
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { ContextLogin } from "../context/ContextLogin";
import "../styles/dashboard.css";

export const Dashboard = () => {
  const { auth } = useContext(ContextLogin);

  if (!auth) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="app">
      <header className="header">
        <h1>React Dashboard</h1>
      </header>
      <div className="container">
        <nav className="sidebar">
          <ul>
            <li>
              <FaHome /> Inicio
            </li>
            <li>
              <FaChartBar /> Estadísticas
            </li>
            <li>
              <FaCog /> Configuración
            </li>
          </ul>
        </nav>
        <main className="main-content">
          <h2>Dashboard</h2>
          <p>Welcome to the registration application control panel.</p>
        </main>
      </div>
    </div>
  );
};
