import React from 'react';
import '../components-style/PetCard.css';

interface Pet {
  name: string;
  sex: string;
  birthdate: string;
  race: string;
  species: string;
}

interface PetCardProps {
  pet: Pet;
}

const PetCard: React.FC<PetCardProps> = ({ pet }) => {
  return (
    <div className="pet-card">
      <h3>{pet.name}</h3>
      <div className="pet-info">
        <p><span className="label">Sexo:</span> {pet.sex}</p>
        <p><span className="label">Fecha de nacimiento:</span> {pet.birthdate}</p>
        <p><span className="label">Raza:</span> {pet.race}</p>
        <p><span className="label">Especie:</span> {pet.species}</p>
      </div>
    </div>
  );
};

export default PetCard;