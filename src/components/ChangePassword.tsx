// ChangePassword.tsx
import React, { useState } from 'react';
import '../components-style/ChangePassword.css'; // Asegúrate de que la ruta sea correcta

const ChangePassword: React.FC = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [repeatNewPassword, setRepeatNewPassword] = useState(''); // Nuevo estado para repetir la contraseña

    const handleChangePassword = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Aquí puedes agregar lógica para validar las contraseñas
        if (newPassword !== repeatNewPassword) {
            alert("Las contraseñas nuevas no coinciden.");
            return;
        }

        // Aquí iría la lógica para cambiar la contraseña
        console.log('Contraseña actual:', currentPassword);
        console.log('Nueva contraseña:', newPassword);
        
        // Reiniciar campos
        setCurrentPassword('');
        setNewPassword('');
        setRepeatNewPassword('');
    };

    return (
        <div className="change-password-container">
            <h2>Cambiar Contraseña</h2>
            <form onSubmit={handleChangePassword}>
                <label>
                    Contraseña actual:
                    <input 
                        type="password" 
                        value={currentPassword} 
                        onChange={(e) => setCurrentPassword(e.target.value)} 
                        required 
                    />
                </label>
                <label>
                    Nueva contraseña:
                    <input 
                        type="password" 
                        value={newPassword} 
                        onChange={(e) => setNewPassword(e.target.value)} 
                        required 
                    />
                </label>
                <label>
                    Repetir nueva contraseña:
                    <input 
                        type="password" 
                        value={repeatNewPassword} 
                        onChange={(e) => setRepeatNewPassword(e.target.value)} 
                        required 
                    />
                </label>
                <button type="submit">Aceptar</button>
            </form>
        </div>
    );
};

export default ChangePassword;