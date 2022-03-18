import React from 'react';
import PageWrapper from '../../common/PageWrapper';
import style from './RegistrationPage.module.scss';

const RegistrationPage = () => (
  <PageWrapper>
    <div className={style.registration_page}>
      <div className={style.container}>
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />

        <label htmlFor="email">
          <b>Email</b>
          <input type="text" placeholder="Enter Email" name="email" required id="email" />
        </label>

        <label htmlFor="psw">
          <b>Password</b>
          <input type="password" placeholder="Enter Password" name="psw" id="psw" required />
        </label>

        <label htmlFor="psw-repeat">
          <b>Repeat Password</b>
          <input
            type="password"
            placeholder="Repeat Password"
            name="psw-repeat"
            id="psw-repeat"
            required
          />
        </label>

        <label htmlFor="remember">
          <input
            type="checkbox"
            name="remember"
            className={style.remember_checkbox}
            id="remember"
          />
          Remember me
        </label>

        <div className={style.clearfix}>
          <button type="submit" className={style.signupbtn}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  </PageWrapper>
);

export default RegistrationPage;
