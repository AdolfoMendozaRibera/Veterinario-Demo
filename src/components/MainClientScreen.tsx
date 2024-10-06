import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components-style/MainClientScreen-style.css';

// Asumimos que tendremos un tipo User con esta información
interface User {
  name: string;
  email: string;
  photoUrl?: string;
}

const MainClientScreen: React.FC = () => {
  const navigate = useNavigate();
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  // Este es un usuario de ejemplo. En una aplicación real, 
  // obtendrías esta información del estado de la aplicación o de una API
  const user: User = {
    name: "Juan Pérez",
    email: "juan@example.com",
    photoUrl: "/path/to/photo.jpg" // Reemplaza esto con una URL real o deja undefined si no hay foto
  };

  const handleLogout = () => {
    // Aquí iría la lógica para cerrar sesión
    navigate('/login');
  };

  return (
    <div className="main-client-screen">
      <nav className="top-bar">
        <div className="nav-buttons">
          <button onClick={() => navigate('/PetList')}>Mascotas</button>
          <button onClick={() => navigate('/recetas')}>Recetas</button>
          <button onClick={() => navigate('/consulta')}>Consulta</button>
        </div>
      </nav>

      <div className="user-info" onClick={() => setShowProfileMenu(!showProfileMenu)}>
        <div className="user-photo">
          {user.photoUrl ? (
            <img src={user.photoUrl} alt={`Foto de ${user.name}`} />
          ) : (
            <div className="default-avatar">{user.name[0]}</div>
          )}
        </div>
        <div className="user-details">
          <p className="user-name">{user.name}</p>
          <p className="user-email">{user.email}</p>
        </div>
        {showProfileMenu && (
          <div className="profile-menu">
            <button onClick={handleLogout}>Cerrar sesión</button>
          </div>
        )}
      </div>

      <div className="content">
        {/* Aquí puedes agregar el contenido principal de la página */}
        <h1>Bienvenido a ZOO LIFE</h1>
        <p>Selecciona una opción en la barra de navegación para comenzar.</p>
      </div>
    </div>
  );
};

export default MainClientScreen;