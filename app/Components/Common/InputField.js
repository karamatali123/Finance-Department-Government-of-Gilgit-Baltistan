// components/form/TextInput.js
import React from "react";

const TextInput = ({
  id,
  name,
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  touched,
  required = false,
  type = "text",
  accept = "",
}) => {
  console.log(error, "error", touched, "touched");
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        accept={accept}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-1 ${
          error && touched
            ? "border-red-500 focus:border-red-500 focus:ring-red-500"
            : "border-gray-300 focus:border-primary focus:ring-primary"
        }`}
      />
      {error && touched && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );
};

export default TextInput;
