/* eslint-disable no-alert, no-console */
import React, { useState } from 'react';
import './style.css';

const LongForm = () => {
  const [companyName, setCompanyName] = useState('');
  const [ceoName, setCeoName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [founder, setFounder] = useState('');

  const handleInputs = (event) => {
    const { value } = event.target;
    switch (event.target.name) {
      case 'companyName':
        return setCompanyName(value);
      case 'ceoName':
        return setCeoName(value);
      case 'address':
        return setAddress(value);
      case 'phone':
        return setPhone(value);
      case 'email':
        return setEmail(value);
      case 'founder':
        return setFounder(value);
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
      <div className="inputContainer">
        <label htmlFor="phone">
          <b>Phone Number</b>
          <input
            id="phone"
            name="phone"
            type="text"
            value={phone}
            onChange={handleInputs}
            placeholder="Enter Phone"
            required
          />
        </label>
      </div>
      <div className="inputContainer">
        <label htmlFor="email">
          <b>Email</b>
          <input
            id="email"
            name="email"
            type="text"
            value={email}
            onChange={handleInputs}
            placeholder="Enter e-mail"
            required
          />
        </label>
      </div>
      <div className="inputContainer">
        <label htmlFor="founder">
          <b>Founder</b>
          <input
            id="founder"
            name="founder"
            type="text"
            value={founder}
            onChange={handleInputs}
            placeholder="Enter Name Of Founder"
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

export default LongForm;
