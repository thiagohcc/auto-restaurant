import React from 'react';

export default function UserInputLogin({userLogin, setUserLogin}) {
  return (
    <div>
      <input
        type="text"
        placeholder="usuário"
        value={ userLogin }
        onChange={ ({ target: { value } }) => setUserLogin(value) }
      />
    </div>
  )
};
