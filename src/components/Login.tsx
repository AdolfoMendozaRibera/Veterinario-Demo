import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components-style/login-style.css";
import LoginForm from "./CLogin/LoginForm";
import RegisterForm from "./CLogin/RegisterForm";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    if (email === "client@example.com" && password === "clientpass") {
      console.log("Cliente login exitoso");
      navigate("/MainClientScreen");
    } else if (email === "staff@example.com" && password === "staffpass") {
      console.log("Personal login exitoso");
      navigate("/MainStaffScreen");
    } else {
      return "Credenciales incorrectas. Por favor, inténtalo de nuevo.";
    }
  };

  const handleRegister = (userData: NewUser) => {
    console.log(userData);
    alert("Usuario registrado exitosamente");
    setIsLogin(true);
  };

  return (
    <div>
      <nav className="top-bar">
        <div className="nav-buttons">
          <button onClick={() => navigate("/")}>Atras</button>
        </div>
      </nav>

      <div id="login">
        <div className="toggle-buttons">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Iniciar Sesión
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            Registrarse
          </button>
        </div>

        {isLogin ? (
          <LoginForm onLogin={handleLogin} />
        ) : (
          <RegisterForm onRegister={handleRegister} />
        )}
      </div>
    </div>
  );
}
