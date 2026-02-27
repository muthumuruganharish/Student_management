import React from 'react';

const Card = ({ children, className = '', glass = false }) => {
    return (
        <div
            className={`
        ${glass
                    ? 'bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl'
                    : 'bg-white border border-gray-100 shadow-xl shadow-gray-200/50'
                } 
        rounded-3xl p-8 ${className}
      `}
        >
            {children}
        </div>
    );
};

export default Card;
