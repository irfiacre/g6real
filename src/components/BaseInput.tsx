import React from "react";

const BaseInput = ({
  value,
  onInputChange,
  type,
  additionalCSS,
  overrideCSS,
  placeholder,
  label,
  id,
}: {
  value: string;
  onInputChange: (data: any) => void;
  label?: string;
  type?: string;
  placeholder?: string;
  additionalCSS?: string;
  overrideCSS?: string;
  id?: string;
}) => {
  const inputID = id ? id : label ? label : "defaultID";
  return (
    <div>
      {label && (
        <label
          htmlFor={inputID}
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          {label}
        </label>
      )}
      <input
        type={type ? type : "text"}
        id={inputID}
        className={
          overrideCSS
            ? overrideCSS
            : `block w-full p-4 ps-10 h-12 bg-white border border-borderColorLight focus:bg-white focus:border-borderColorLight text-md focus:outline-none ${additionalCSS}`
        }
        placeholder={placeholder || "Add text"}
        value={value}
        onChange={onInputChange}
      />
    </div>
  );
};

export default BaseInput;
