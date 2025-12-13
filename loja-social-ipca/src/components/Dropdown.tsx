import "../styles/components/Dropdown.css";
import { forwardRef, SelectHTMLAttributes } from "react";

interface Option {
  label: string;
  value: string | number;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: Option[];
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className = "", ...rest }, ref) => {
    return (
      <div className="select-wrapper">
        {label && <label className="select-label">{label}</label>}

        <select
          ref={ref}
          className={`select-field ${error ? "select-error" : ""} ${className}`}
          {...rest}
        >
          <option value="">Selecione...</option>

          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {error && <span className="select-error-text">{error}</span>}
      </div>
    );
  }
);

export default Select;
