import React, { useState } from "react";
import InputField from "./InputField";
import UserTypeSelector from "./UserTypeSelector";

interface RegisterFormProps {
  onRegister: (userData: NewUser) => void;
}

export default function RegisterForm({ onRegister }: RegisterFormProps) {
  const [newUser, setNewUser] = useState<NewUser>({
    email: "",
    password: "",
    tel: "",
    idCard: "",
    userType: "client",
    petName: "",
    petSex: "",
    petBirthdate: "",
    profession: "",
    position: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onRegister(newUser);
  };

  return (
    <form onSubmit={handleSubmit}>
      <UserTypeSelector
        userType={newUser.userType}
        onChange={(type) => setNewUser((prev) => ({ ...prev, userType: type }))}
      />
      <InputField
        label="Correo electrónico"
        type="email"
        name="email"
        placeholder="Example@gmail.com"
        value={newUser.email}
        onChange={handleChange}
        required
      />
      <InputField
        label="Contraseña"
        type="password"
        name="password"
        placeholder="Contraseña personal"
        value={newUser.password}
        onChange={handleChange}
        required
      />
      <InputField
        label="Teléfono"
        type="tel"
        name="tel"
        placeholder="Número de teléfono"
        value={newUser.tel}
        onChange={handleChange}
      />
      <InputField
        label="Carnet de Identidad"
        type="text"
        name="idCard"
        placeholder="Número de carnet"
        value={newUser.idCard}
        onChange={handleChange}
      />

      
      {newUser.userType === "staff" && (
        <>
          <InputField
            label="Profesión"
            type="text"
            name="profession"
            placeholder="Ej: Veterinario"
            value={newUser.profession}
            onChange={handleChange}
          />
          <InputField
            label="Cargo"
            type="text"
            name="position"
            placeholder="Ej: Cirujano"
            value={newUser.position}
            onChange={handleChange}
          />
        </>
      )}

      <button type="submit">Registrarse</button>
    </form>
  );
}