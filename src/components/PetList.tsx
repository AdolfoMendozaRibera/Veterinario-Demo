import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import PetForm from "./PetForm";
import PetCard from "./PetCard";
import '../components-style/PetList.css';

interface Pet {
  name: string;
  sex: string;
  birthdate: string;
  race: string;
  species: string;
}

export default function PetList() {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [pets, setPets] = useState<Pet[]>([]);

  const handleAddPet = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (newPet: Pet) => {
    setPets((prevPets) => [...prevPets, newPet]);
    setShowForm(false);
  };

  return (
    <div className="pet-list">
      <nav className="top-bar">
        <div className="nav-buttons">
          <button onClick={() => navigate('/MainClientScreen')}>Atras</button>
        </div>
      </nav>
      <h2>Tus mascotas</h2>
      <div className="pet-grid">
        {pets.map((pet, index) => (
          <PetCard key={index} pet={pet} />
        ))}
      </div>
      {!showForm && (
        <button onClick={handleAddPet} className="add-button">Agregar más mascotas</button>
      )}
      {showForm && (
        <PetForm onSubmit={handleFormSubmit} />
      )}
    </div>
  );
}