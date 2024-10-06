import React, { useState } from "react";
import InputField from "./InputField";

interface LoginFormProps {
  onLogin: (email: string, password: string) => string | void;
}

export default function LoginForm({ onLogin }: LoginFormProps) {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
    console.log(user)
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    const result = onLogin(user.email, user.password);
    if (typeof result === "string") {
      setError(result);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Correo electrónico"
        type="email"
        name="email"
        placeholder="Example@gmail.com"
        value={user.email}
        onChange={handleChange}
        required
      />
      <InputField
        label="Contraseña"
        type="password"
        name="password"
        placeholder="Contraseña personal"
        value={user.password}
        onChange={handleChange}
        required
      />
      {error && <p className="error-message">{error}</p>}
      <button type="submit">Ingresar</button>
    </form>
  );
}