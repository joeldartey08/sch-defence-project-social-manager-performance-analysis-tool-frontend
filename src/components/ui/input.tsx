import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input: React.FC<InputProps> = ({ className = "", ...props }) => {
  return (
    <input
      className={`w-full border border-gray-300 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-black ${className}`}
      {...props}
    />
  );
};

export default Input;
