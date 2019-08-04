import React, { useState } from 'react';

const TypeA = () => {
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

  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
    <form>
      <input
        name="companyName"
        type="text"
        value={companyName}
        onChange={handleInputs}
        placeholder="Enter Company Name"
        required
      />
      <input
        name="ceoName"
        type="text"
        value={ceoName}
        onChange={handleInputs}
        placeholder="Enter CEO Name"
        required
      />
      <input
        name="address"
        type="text"
        value={address}
        onChange={handleInputs}
        placeholder="Enter Address"
        required
      />
      <button type="button" onClick={handleClick}>
        Go!
      </button>
    </form>
  );
};

export default TypeA;
