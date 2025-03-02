import React, { ReactNode } from "react";

interface ButtonProps {
  title: string;
  icon?: ReactNode;
  bgColor?: string;
  textColor?: string;
  containerClass?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  title,
  icon,
  bgColor,
  textColor,
  containerClass,
}) => {
  return (
    <button
      className={`flex items-center justify-center gap-3 ${bgColor} ${textColor}`}
      style={containerClass}
    >
      {icon && icon}
      {title}
    </button>
  );
};

export default Button;
