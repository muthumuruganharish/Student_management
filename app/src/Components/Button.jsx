import React from 'react';

const Button = ({ children, className = '', variant = 'primary', ...props }) => {
  const baseStyles = 'px-6 py-3 rounded-xl font-medium transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 focus:ring-blue-500',
    secondary: 'bg-white text-gray-800 border border-gray-200 hover:bg-gray-50 hover:shadow-md focus:ring-gray-200',
    glass: 'bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30 hover:shadow-xl focus:ring-white/50',
    danger: 'bg-red-600 text-white hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/30 focus:ring-red-500',
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
