import React from "react";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  label?: string;
}

const Textarea: React.FC<TextareaProps> = ({
  error,
  label,
  className,
  ...props
}) => {
  return (
    <div style={{ marginBottom: "0.5rem" }}>
      {label && (
        <label
          htmlFor={props.id}
          style={{
            display: "block",
            marginBottom: "0.25rem",
            fontWeight: 500,
            fontSize: "0.9rem",
          }}
        >
          {label}
        </label>
      )}
      <textarea
        {...props}
        className={`${className || ""} ${error ? "textarea-error" : ""}`}
        style={{
          padding: "0.5rem",
          borderRadius: "4px",
          border: error ? "2px solid #d32f2f" : "1px solid #ccc",
          fontSize: "1rem",
          fontFamily: "inherit",
          ...props.style,
        }}
        aria-invalid={!!error}
        aria-describedby={error ? `${props.id}-error` : undefined}
      />
      {error && (
        <p
          id={`${props.id}-error`}
          style={{
            color: "#d32f2f",
            fontSize: "0.85rem",
            marginTop: "0.25rem",
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default Textarea;
