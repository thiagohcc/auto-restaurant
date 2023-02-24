import React from 'react';

export default function BtnLogin({setLogin, btnDisabled}) {
  return (
    <button
      type="button"
      onClick={ setLogin }
      disabled={ btnDisabled }
    >
      Login
    </button>
  )
};
