import React from 'react';

const TextField = ({ label, error, touched, ...props }) => {
  return (
    <div className="flex flex-col mb-2">
      <label>{label}</label>
      <input
        {...props}
        className="input-bordered input mt-1 w-full"
      />
      {error && touched && <div className="text-red-500">{error}</div>}
    </div>
  );
};

export { TextField };
