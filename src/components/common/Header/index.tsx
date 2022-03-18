import React from 'react';
import style from './Header.module.scss';

const Header = () => (
  <header className={style.header}>
    <div>
      <h1 className={style.logo}>CartridgeShop.ru</h1>
    </div>
  </header>
);

export default Header;
