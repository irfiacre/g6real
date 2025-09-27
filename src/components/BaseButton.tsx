import React from "react";

const BaseButton = ({
  label,
  handleClick,
  additionalCSS,
  overrideCSS
}: {
  label: string;
  handleClick: (data: any) => void;
  additionalCSS?: string;
  overrideCSS?: string
}) => {
  return (
    <div>
      <button
        className={overrideCSS ? overrideCSS: `px-5 py-3 text-primary bg-primaryLight rounded-full font-medium text-base hover:bg-primary hover:text-primaryLight hover:cursor-pointer ${additionalCSS}`}
        type="button"
        onClick={handleClick}
      >
        {label}
      </button>
    </div>
  );
};

export default BaseButton;
