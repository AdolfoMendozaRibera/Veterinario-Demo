// MainStaffScreen.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components-style/MainStaffScreen-style.css';

interface Staff {
  name: string;
  email: string;
  photoUrl?: string;
}

const MainStaffScreen: React.FC = () => {
  const navigate = useNavigate();
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  // Este es un usuario de ejemplo. En una aplicación real, 
  // obtendrías esta información del estado de la aplicación o de una API
  const staff: Staff = {
    name: "Dr. María López",
    email: "maria@example.com",
    photoUrl: "/path/to/photo.jpg" // Reemplaza esto con una URL real o deja undefined si no hay foto
  };

  const handleLogout = () => {
    // Aquí iría la lógica para cerrar sesión
    navigate('/login');
  };

  return (
    <div className="main-staff-screen">
      <nav className="top-bar">
        <div className="nav-buttons">
          <button onClick={() => navigate('/PersonalList')}>Personal</button>
          <button onClick={() => navigate('/consultas')}>Consultas</button>
          <button onClick={() => navigate('/servicios')}>Servicios</button>
          <button onClick={() => navigate('/pacientes')}>Pacientes</button>
          <button onClick={() => navigate('/medicamentos')}>Medicamentos</button>
        </div>
      </nav>

      <div className="user-info" onClick={() => setShowProfileMenu(!showProfileMenu)}>
        <div className="user-photo">
          {staff.photoUrl ? (
            <img src={staff.photoUrl} alt={`Foto de ${staff.name}`} />
          ) : (
            <div className="default-avatar">{staff.name[0]}</div>
          )}
        </div>
        <div className="user-details">
          <p className="user-name">{staff.name}</p>
          <p className="user-email">{staff.email}</p>
        </div>
        {showProfileMenu && (
          <div className="profile-menu">
            {/* Redirigir al formulario de cambio de contraseña */}
            <button onClick={() => navigate('/ChangePassword')}>Cambiar Contraseña</button>
            <button onClick={handleLogout}>Cerrar sesión</button>
          </div>
        )}
      </div>

      <div className="content">
        <h1>Bienvenido al Panel de Personal</h1>
        <p>Selecciona una opción en la barra de navegación para comenzar.</p>
      </div>
    </div>
  );
};

export default MainStaffScreen;