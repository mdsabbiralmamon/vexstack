import React, { ReactNode } from "react";

interface ButtonProps {
  title: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  containerClass?: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  iconLeft,
  iconRight,
  containerClass,
}) => {
  return (
    <button
      className={`flex items-center justify-center gap-3 ${containerClass}`}
    >
      {iconLeft && iconLeft}
      {title}
      {iconRight && iconRight}
    </button>
  );
};

export default Button;
