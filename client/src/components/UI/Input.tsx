import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Input({ label, className = '', ...props }: InputProps) {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-gray-700 mb-2">
          {label}
        </label>
      )}
      <input
        className={`w-full px-3 py-2 border rounded-md ${className}`}
        {...props}
      />
    </div>
  );
}