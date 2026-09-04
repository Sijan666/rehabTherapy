import React from "react";

const Button = ({ children, className, ...props }) => {
  const baseClasses = `bg-[#262626] text-white font-bold cursor-pointer inline-block text-center transition-all ${className}`;
  return (
    <button className={baseClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
