import React from 'react';
import PageWrapper from '../../common/PageWrapper';
import style from './AuthPage.module.scss';

const login = () => alert('Вжух, и ты залогинился!');
const AuthPage = () => (
  <PageWrapper>
    <div className={style.auth_window}>
      <div className={style.imgcontainer}>
        <img src="/public/Dendylogo.jpg" alt="Avatar" className={style.avatar} />
      </div>
      <div className={style.container}>
        <label htmlFor="uname">
          <div>
            <b>Username</b>
          </div>
          <div>
            <input type="text" placeholder="Enter Username" name="uname" id="uname" required />
          </div>
        </label>
        <label htmlFor="psw">
          <div>
            <b>Password</b>
          </div>
          <div>
            <input type="password" placeholder="Enter Password" name="psw" required id="psw" />
          </div>
        </label>

        <button type="submit" onClick={login}>
          Login
        </button>
        <label htmlFor="rememeber">
          <div>
            <input type="checkbox" name="remember" id="remember" />
            Remember me
          </div>
        </label>
      </div>
      <div className={style.button_container}>
        <span className={style.psw}>
          {'Forgot '}
          <a href="localhost">password?</a>
        </span>
      </div>
    </div>
  </PageWrapper>
);

export default AuthPage;
