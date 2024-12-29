import React, { useState } from 'react';

function Cred() {
  const [name, setName] = useState({ firstname: '', lastname: '' });

  const handleFirstNameChange = (e) => {
    setName((prevState) => ({
      ...prevState,
      firstname: e.target.value,
    }));
  };

  const handleLastNameChange = (e) => {
    setName((prevState) => ({
      ...prevState,
      lastname: e.target.value,
    }));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="firstname"
        value={name.firstname}
        onChange={handleFirstNameChange}
      />
      <input
        type="text"
        placeholder="lastname"
        value={name.lastname}
        onChange={handleLastNameChange}
      />
      <h2>{name.firstname}</h2>
      <h2>{name.lastname}</h2>
    </div>
  );
}

export default Cred;
