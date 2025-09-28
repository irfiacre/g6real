import React from "react";

const BaseCard = ({
  children,
  className,
  onClick,
}: {
  children: any;
  className?: string; // For tailwind additional styles
  onClick?: () => void;
}) => {
  return (
    <div
      className={`w-full bg-white rounded-3xl ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default BaseCard;
