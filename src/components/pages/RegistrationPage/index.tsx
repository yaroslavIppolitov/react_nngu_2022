import React, { useState, useEffect } from 'react';
import PasswordInput from '../../common/Form/PasswordInput';
import PageWrapper from '../../common/PageWrapper';
import style from './RegistrationPage.module.scss';

const RegistrationPage = () => {
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [passwordType, setPasswordType] = useState('password');
  const [buttonTitle, setButtonTitle] = useState('Показать пароль');
  const [pswsMatch, setpswsMatch] = useState(false);
  useEffect(() => {
    if (password === passwordRepeat && password.length > 0) {
      setpswsMatch(true);
    } else if (password.length > 0) {
      setpswsMatch(false);
    }
  }, [passwordRepeat]);
  return (
    <PageWrapper>
      <div className={style.registration_page}>
        <div className={style.container}>
          <h1>Регистрация</h1>
          <p>Пожалуйста, заполните эту форму, чтобы создать учетную запись.</p>
          <hr />

          <label htmlFor="email">
            <b>Электронная почта</b>
            <input type="text" placeholder="Введите Email" name="email" required id="email" />
          </label>

          <label htmlFor="psw">
            <b>Пароль</b>
            <PasswordInput
              id="psw"
              placeholder="Введите пароль"
              value={password}
              inputname="psw"
              setValue={setPassword}
              type={passwordType}
              setType={setPasswordType}
              buttonTitle={buttonTitle}
              setButtonTitle={setButtonTitle}
            />
            {/* <input type="password" placeholder="Введите пароль" name="psw" id="psw" required /> */}
          </label>

          <label htmlFor="psw-repeat">
            <b>Повторите пароль</b>
            {pswsMatch && <h3 className={style.passwordsMatches}>Пароли не должны совпадать</h3>}
            <PasswordInput
              id="psw-repeat"
              placeholder="Повторите пароль"
              value={passwordRepeat}
              inputname="psw-repeat"
              setValue={setPasswordRepeat}
              type={passwordType}
              setType={setPasswordType}
              buttonTitle={buttonTitle}
              setButtonTitle={setButtonTitle}
            />
            {/* <input
              type="password"
              placeholder="Повторите пароль"
              name="psw-repeat"
              id="psw-repeat"
              required
            /> */}
          </label>

          <label htmlFor="remember">
            <input
              type="checkbox"
              name="remember"
              className={style.remember_checkbox}
              id="remember"
            />
            Запомните меня
          </label>

          <div className={style.clearfix}>
            <button type="submit" className={style.signupbtn}>
              Зарегистрироваться
            </button>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default RegistrationPage;
