import React from "react";

const BaseButton = ({
  label,
  handleClick,
  disabled,
  additionalCSS,
  overrideCSS,
  children,
}: {
  label?: string;
  handleClick: (data: any) => void;
  disabled?: boolean;
  additionalCSS?: string;
  overrideCSS?: string;
  children?: any;
}) => {
  return (
    <div>
      <button
        className={
          overrideCSS
            ? overrideCSS
            : `capitalize px-5 py-3 text-primary bg-primaryLight rounded-full font-medium text-base hover:bg-primary hover:text-primaryLight hover:cursor-pointer ${additionalCSS}`
        }
        type="button"
        onClick={handleClick}
        disabled={disabled || false}
      >
        {children ? children : label}
      </button>
    </div>
  );
};

export default BaseButton;
