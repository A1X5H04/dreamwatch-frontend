'use client';
import React, { useState } from 'react';

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState); // Toggle the dropdown state
  };

  return (
    <>
      {isOpen ? (
        <span className="ml-[-6px] hover:cursor-pointer" onClick={handleToggle}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="m8.303 11.596l3.327-3.431a.5.5 0 0 1 .74 0l6.43 6.63c.401.414.158 1.205-.37 1.205h-5.723z" /><path fill="#000" d="M11.293 16H5.57c-.528 0-.771-.791-.37-1.205l2.406-2.482z" opacity="0.5" /></svg>
        </span>
      ) : (
        <span className="ml-[-6px] hover:cursor-pointer" onClick={handleToggle}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="m8.303 12.404l3.327 3.431c.213.22.527.22.74 0l6.43-6.63C19.201 8.79 18.958 8 18.43 8h-5.723z" /><path fill="#000" d="M11.293 8H5.57c-.528 0-.771.79-.37 1.205l2.406 2.481z" opacity="0.5" /></svg>
        </span>
      )}
    </>
  );
};

export default DropDown;
