import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

export function Button({ children, onClick, disabled }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: "10px 16px",
        borderRadius: "6px",
        border: "1px solid #ccc",
        backgroundColor: disabled ? "#e5e5e5" : "#ffffff",
        cursor: disabled ? "not-allowed" : "pointer",
        fontSize: "14px",
      }}
    >
      {children}
    </button>
  );
}
