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
            <span className="close"><img src="https://img.icons8.com/windows/32/000000/close-window.png"/></span>
            <div>{modalHeader}</div>
            {children}
            <div className="footer" />
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
