import React, { useState } from 'react';
import './style.css';

const Modal = ({ children, buttonLabel, modalHeader }) => {
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
        {buttonLabel}
      </button>
      {open && (
        <div className="backgroundContainer">
          <div className="container">
            <button
              type="button"
              className="close"
              onClick={handleClose}
            >
              <span>
                <img
                  src="https://img.icons8.com/windows/32/000000/close-window.png"
                  alt="x"
                />
              </span>
            </button>
            <div className="header">{modalHeader}</div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
