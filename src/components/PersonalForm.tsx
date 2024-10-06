import React, { useState, useEffect } from "react";
import InputField from "./CLogin/InputField";
import "../components-style/PersonalForm.css";

interface PersonalData {
  fullName: string;
  phone: string;
  address: string;
  hireDate: string;
  email: string;
  charge: string;
  role: string;
  isUser: boolean;
  userPassword?: string;
  photo: string | null;
}

interface PersonalFormProps {
  onSubmit: (newPersonal: PersonalData) => void;
}

const PersonalForm: React.FC<PersonalFormProps> = ({ onSubmit }) => {
  const [personalData, setPersonalData] = useState<PersonalData>({
    fullName: "",
    phone: "",
    address: "",
    hireDate: "",
    email: "",
    charge: "",
    role: "",
    isUser: false,
    userPassword: "",
    photo: null,
  });

  useEffect(() => {
    if (personalData.isUser) {
      setPersonalData(prevData => ({
        ...prevData,
        userPassword: prevData.userPassword || ""
      }));
    }
  }, [personalData.isUser]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file" && files) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setPersonalData(prevData => ({
          ...prevData,
          photo: reader.result as string
        }));
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    } else if (name === "isUser") {
      setPersonalData(prevData => ({
        ...prevData,
        isUser: checked,
        userPassword: checked ? prevData.userPassword : "",
      }));
    } else {
      setPersonalData(prevData => ({
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(personalData);
    setPersonalData({
      fullName: "",
      phone: "",
      address: "",
      hireDate: "",
      charge:"",
      email: "",
      role: "",
      isUser: false,
      userPassword: "",
      photo: null,
    });
  };

  return (
    <form className="personal-form" onSubmit={handleSubmit}>
      <h2>Datos del Personal</h2>
      <div className="form-group">
        <InputField
          label="Nombre Completo"
          type="text"
          name="fullName"
          placeholder="Nombre Completo"
          value={personalData.fullName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <InputField
          label="Teléfono"
          type="tel"
          name="phone"
          placeholder="Teléfono"
          value={personalData.phone}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <InputField
          label="Dirección"
          type="text"
          name="address"
          placeholder="Dirección"
          value={personalData.address}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <InputField
          label="Fecha de Contratación"
          type="date"
          name="hireDate"
          placeholder="Fecha de Contratación"
          value={personalData.hireDate}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <InputField
          label="Email"
          type="email"
          name="email"
          placeholder="Email"
          value={personalData.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <InputField
          label="Charge"
          type="text"
          name="charge"
          placeholder="Charge"
          value={personalData.charge}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <InputField
          label="Rol"
          type="text"
          name="role"
          placeholder="Rol"
          value={personalData.role}
          onChange={handleChange}
        />
      </div>
      <div className="checkbox-group">
        <input
          type="checkbox"
          name="isUser"
          checked={personalData.isUser}
          onChange={handleChange}
          id="isUser"
        />
        <label htmlFor="isUser">Es usuario</label>
      </div>
      {personalData.isUser && (
        <div className="form-group">
          <InputField
            label="Contraseña"
            type="password"
            name="userPassword"
            placeholder="Contraseña"
            value={personalData.userPassword || ""}
            onChange={handleChange}
          />
        </div>
      )}
      <div className="form-group">
        <label htmlFor="photo">Foto:</label>
        <input
          type="file"
          name="photo"
          accept="image/*"
          onChange={handleChange}
          className="file-input"
          id="photo"
        />
      </div>
      <button type="submit" className="submit-btn">Guardar Personal</button>
    </form>
  );
};

export default PersonalForm;