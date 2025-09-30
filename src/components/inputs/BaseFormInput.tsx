import React from "react";

interface InputProps {
  type: string;
  error?: string | undefined;
  placeholder?: string;
  additionalCSS?: string;
  overrideCSS?: string;
}

const BaseFormInput = ({
  type,
  error,
  placeholder,
  additionalCSS,
  overrideCSS,
  ...props
}: InputProps) => {
  return (
    <div>
      <input
        type={type || "text"}
        className={
          overrideCSS
            ? overrideCSS
            : `${
                error
                  ? "bg-red-50 border border-red-500 text-red-900"
                  : "bg-white border border-borderColorLight"
              } block w-full p-4 h-12 focus:bg-white focus:border-borderColorLight text-md focus:outline-none ${additionalCSS}`
        }
        placeholder={`Enter ${placeholder || ""}`}
        {...props}
      />
      {error && <p className="mt-2 px-5 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default BaseFormInput;
