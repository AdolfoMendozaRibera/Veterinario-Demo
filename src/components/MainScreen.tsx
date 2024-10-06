import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../components-style/MainScreen-style.css'

const MainScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/Login');
  };

  return (
    <div className="main-screen">
      <nav className="top-bar">
        <div className="nav-buttons">
          <button onClick={handleLoginClick}>Inicio de sesión</button>
          <button>Servicio</button>
          <button>Raza</button>
          {/* Aquí se puede agregar más botones en el futuro */}
        </div>
      </nav>
      <div className="content">
        {/* Aquí se puede agregar el contenido principal de la página en el futuro */}
        <p>ZOO LIFE</p>
      </div>
    </div>
  );
};

export default MainScreen;
