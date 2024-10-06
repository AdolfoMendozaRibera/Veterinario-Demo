import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import PersonalForm from "./PersonalForm";
import PersonalCard from "./PersonalCard";
import "../components-style/PersonalList.css";

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

export default function PersonalList() {
  
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();
  const [personalList, setPersonalList] = useState<PersonalData[]>([]);

  const handleAddPersonal = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (newPersonal: PersonalData) => {
    setPersonalList((prevList) => [...prevList, newPersonal]);
    setShowForm(false);
  };

  return (
    <div className="container">
      <nav className="top-bar">
        <div className="nav-buttons">
          <button onClick={() => navigate('/MainStaffScreen')}>Atras</button>
        </div>
      </nav>
      <div className="personal-list-header">
        <h2 className="personal-list-title">Lista de Personal</h2>
        {!showForm && (
          <button className="btn btn-primary add-personal-btn" onClick={handleAddPersonal}>
            Agregar Personal
          </button>
        )}
      </div>
      {showForm && (
        <PersonalForm onSubmit={handleFormSubmit} />
      )}
      <div className="personal-list">
        {personalList.map((personal, index) => (
          <PersonalCard key={index} personal={personal} />
        ))}
      </div>
    </div>
  );
}