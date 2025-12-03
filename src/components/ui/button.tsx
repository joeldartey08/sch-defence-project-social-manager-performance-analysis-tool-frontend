import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`px-4 py-2 bg-black text-white rounded-xl font-medium hover:opacity-90 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
