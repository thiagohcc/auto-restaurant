import React, { useState, useEffect, useContext } from 'react';
import UserInputLogin from '../../components/UserInputLogin';
import PasswordInputLogin from '../../components/PasswordInputLogin';
import BtnLogin from '../../components/BtnLogin';
import { isValidUser, isValidPassword } from '../../helpers/validator';
import GeneralContext from '../../context/generalContext';
import { Link } from 'react-router-dom';

export default function LoginTable() {
  const { setUser } = useContext(GeneralContext);
  const [userLogin, setUserLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);

  const registerUser = () => {
    setUser({
      userLogin,
      passwordLogin,
      userCategory: 'table',
    });
  }

  const setLogin = () => {
    registerUser();
  }

  useEffect(() => {
    const isUserValid = isValidUser(userLogin);
    const isPasswordValid = isValidPassword(passwordLogin);
    const isDisabled = !(isUserValid && isPasswordValid);
    setBtnDisabled(isDisabled);
  }, [userLogin, passwordLogin]);
  
  return (
    <div>
      <UserInputLogin
        userLogin={ userLogin }
        setUserLogin={ setUserLogin }
      />
      <PasswordInputLogin
        passwordLogin={ passwordLogin }
        setPasswordLogin={ setPasswordLogin }
      />
      <Link to="/table-menu">
        <BtnLogin
          setLogin={ setLogin }
          btnDisabled={ btnDisabled }
        />
      </Link>
    </div>
  )
};
