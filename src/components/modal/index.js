import React, { useState } from 'react';
import './style.css';

const Modal = ({ children, title }) => {
  const [open, setOpen] = useState(false);

  const handlerOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button type="button" onClick={handlerOpen}>
        {title}
      </button>
      {open && (
        <div className="backgroundContainer">
          <div className="container">
            {children}
            <div className="footer">
              <button type="button" onClick={handleClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
