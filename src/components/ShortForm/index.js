/* eslint-disable no-alert, no-console */
import React, { useState } from 'react';
import './style.css';

const ShortForm = () => {
  const [companyName, setCompanyName] = useState('');
  const [ceoName, setCeoName] = useState('');
  const [address, setAddress] = useState('');

  const handleInputs = (event) => {
    const { value } = event.target;
    switch (event.target.name) {
      case 'companyName':
        return setCompanyName(value);
      case 'ceoName':
        return setCeoName(value);
      case 'address':
        return setAddress(value);
      default:
        return null;
    }
  };

  const handleSave = (event) => {
    event.preventDefault();
    alert('This is just a test =)');
  };

  return (
    <div className="containerTypeA">
      <div className="inputContainer">
        <label htmlFor="companyName">
          <b>Company Name</b>
          <input
            id="companyName"
            name="companyName"
            type="text"
            value={companyName}
            onChange={handleInputs}
            placeholder="Enter Company Name"
            required
          />
        </label>
      </div>
      <div className="inputContainer">
        <label htmlFor="ceoName">
          <b>CEO Name</b>
          <input
            id="ceoName"
            name="ceoName"
            type="text"
            value={ceoName}
            onChange={handleInputs}
            placeholder="Enter CEO Name"
            required
          />
        </label>
      </div>
      <div className="inputContainer">
        <label htmlFor="address">
          <b>Address</b>
          <input
            id="address"
            name="address"
            type="text"
            value={address}
            onChange={handleInputs}
            placeholder="Enter Address"
            required
          />
        </label>
      </div>
      <button
        type="button"
        className="buttonStyle"
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
};

export default ShortForm;
