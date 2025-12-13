import React from "react";
import "../styles/components/Button.css";
import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
  color?: string;
  loading?: boolean;
  fullWidth?: boolean;
  label?: string;
  error?: string;
}

export default function Button({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  color = "#005321",
  disabled = false,
  loading = false,
  fullWidth = false,
  className = "",
  label,
  error,
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={`
        btn
        btn-${variant}
        btn-${size}
        ${fullWidth ? "btn-full" : ""}
        ${className}
      `}
      style={
        {
          "--btn-color": color,
        } as React.CSSProperties
      }
      {...rest}
    >
      {loading ? "Aguarde..." : children}
    </button>
  );
}