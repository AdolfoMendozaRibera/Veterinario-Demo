import React, { useState } from "react";
import InputField from "./CLogin/InputField";
import '../components-style/PerForm.css';

interface Pet {
  name: string;
  sex: string;
  birthdate: string;
  race: string;
  species: string;
}

interface PetFormProps {
  onSubmit: (newPet: Pet) => void;
}

const PetForm: React.FC<PetFormProps> = ({ onSubmit }) => {
  const [newPet, setNewPet] = useState<Pet>({
    name: "",
    sex: "",
    birthdate: "",
    race: "",
    species: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewPet((prevPet) => ({
      ...prevPet,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(newPet);
    setNewPet({
      name: "",
      sex: "",
      birthdate: "",
      race: "",
      species: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="pet-form">
      <h2>Rellena los datos</h2>
      <div className="form-group">
        <InputField
          label="Nombre"
          type="text"
          name="name"
          placeholder="Nombre de la mascota"
          value={newPet.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <InputField
          label="Sexo"
          type="text"
          name="sex"
          placeholder="Sexo de la mascota"
          value={newPet.sex}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <InputField
          label="Fecha de nacimiento"
          type="date"
          name="birthdate"
          placeholder="Fecha de nacimiento"
          value={newPet.birthdate}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <InputField
          label="Raza"
          type="text"
          name="race"
          placeholder="Raza de la mascota"
          value={newPet.race}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <InputField
          label="Especie"
          type="text"
          name="species"
          placeholder="Especie de la mascota"
          value={newPet.species}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="submit-button">Guardar mascota</button>
    </form>
  );
};

export default PetForm;