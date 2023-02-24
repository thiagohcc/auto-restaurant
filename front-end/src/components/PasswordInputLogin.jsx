import React from 'react';

export default function PasswordInputLogin({ passwordLogin, setPasswordLogin }) {
  return (
    <div>
      <input
        type="text"
        placeholder="password"
        value={ passwordLogin }
        onChange={ ({ target: { value }}) => setPasswordLogin(value) } />
    </div>
  )
};
