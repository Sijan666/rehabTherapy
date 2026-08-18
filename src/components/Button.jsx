import React from 'react';

// reusable button or link component
const Button = ({ children, className, href, onClick, ...props }) => {
    const baseClasses = `bg-[#262626] text-white font-bold cursor-pointer inline-block text-center transition-all ${className}`;
    
    // render as anchor link if href exists
    if (href) {
        return (
        <a href={href} className={baseClasses} {...props}>
            {children}
        </a>
        );
    }

    // render as standard button
    return (
        <button onClick={onClick} className={baseClasses} {...props}>
        {children}
        </button>
    );
};

export default Button;