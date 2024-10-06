import React from "react";
import "../components-style/PersonalCard.css";

interface PersonalData {
  fullName: string;
  phone: string;
  address: string;
  hireDate: string;
  email: string;
  role: string;
  isUser: boolean;
  userPassword?: string;
  photo: string | null;
}

interface PersonalCardProps {
  personal: PersonalData;
}

const PersonalCard: React.FC<PersonalCardProps> = ({ personal }) => {
  return (
    <div className="personal-card">
      <div className="personal-card-header">
        <h3>{personal.fullName}</h3>
      </div>
      <div className="personal-card-body">
        {personal.photo && (
          <img 
            src={personal.photo} 
            alt={`Foto de ${personal.fullName}`} 
            className="personal-card-photo"
          />
        )}
        <div className="personal-card-info">
          <p><strong>Teléfono:</strong> {personal.phone}</p>
          <p><strong>Dirección:</strong> {personal.address}</p>
          <p><strong>Fecha de Contratación:</strong> {personal.hireDate}</p>
          <p><strong>Email:</strong> {personal.email}</p>
          <p><strong>Rol:</strong> {personal.role}</p>
          <p><strong>Es usuario:</strong> {personal.isUser ? "Sí" : "No"}</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalCard;