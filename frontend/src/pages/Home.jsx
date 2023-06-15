import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <Link to="/login-table">
        <p>Tables</p>
      </Link>
      <Link to="/login-test">
        <p>Teste</p>
      </Link>
    </div>
  )
};
