import React from "react";
import "../styles/components/Input.css";

interface InputProps {
  label?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: string;
  size?: "sm" | "md" | "lg";
  color?: string;
  as?: "input" | "textarea";
  error?: string;
  id?: string;
  name?: string;
  [key: string]: any;
}

export default function Input({
  label,
  value,
  onChange,
  type = "text",
  size = "md",
  color = "#7FBFA3",
  as = "input",
  error,
  id,
  name,
  ...rest
}: InputProps) {
  const Component = as;

  return (
    <div className={`input-wrapper input-${size}`}>
      {label && (
        <label htmlFor={id || name} className="input-label">
          {label}
        </label>
      )}

      <Component
        id={id || name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={`input-field ${error ? "input-error" : ""}`}
        style={{ borderColor: color }}
        {...rest}
      />

      {error && <span className="input-error-text">{error}</span>}
    </div>
  );
}
