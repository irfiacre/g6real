import React from "react";

type BaseButtonProps = {
  label?: string;
  handleClick?: (data?: any) => void;
  disabled?: boolean;
  additionalCSS?: string;
  overrideCSS?: string;
  children?: React.ReactNode;
  buttonType?: "button" | "submit" | "reset";
};

const BaseButton: React.FC<BaseButtonProps> = ({
  label,
  handleClick = () => {},
  disabled,
  additionalCSS,
  overrideCSS,
  children,
  buttonType = "button",
  ...props
}) => {
  return (
    <div>
      <button
        className={
          overrideCSS
            ? overrideCSS
            : `capitalize px-5 py-3 text-primary bg-primaryLight rounded-full font-medium text-base hover:bg-primary hover:text-primaryLight hover:cursor-pointer ${additionalCSS}`
        }
        type={buttonType}
        onClick={handleClick}
        disabled={disabled || false}
        {...props}
      >
        {children ?? label}
      </button>
    </div>
  );
};

export default BaseButton;
