import React from "react";

interface UserTypeSelectorProps {
  userType: "client" | "staff";
  onChange: (type: "client" | "staff") => void;
}

export default function UserTypeSelector({ userType, onChange }: UserTypeSelectorProps) {
  return (
    <div className="user-type-buttons">
      <button
        type="button"
        className={userType === "client" ? "active" : ""}
        onClick={() => onChange("client")}
      >
        Cliente
      </button>
      <button
        type="button"
        className={userType === "staff" ? "active" : ""}
        onClick={() => onChange("staff")}
      >
        Personal
      </button>
    </div>
  );
}