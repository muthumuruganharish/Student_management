import React from 'react';

const Input = ({ label, error, className = '', ...props }) => {
    return (
        <div className="w-full space-y-1.5">
            {label && (
                <label className="block text-sm font-medium text-gray-700 ml-1">
                    {label}
                </label>
            )}
            <input
                className={`w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 placeholder:text-gray-400 ${error ? 'border-red-500 ring-red-500/20' : ''
                    } ${className}`}
                {...props}
            />
            {error && (
                <p className="text-xs text-red-500 ml-1 mt-1 font-medium italic">
                    {error}
                </p>
            )}
        </div>
    );
};

export default Input;
