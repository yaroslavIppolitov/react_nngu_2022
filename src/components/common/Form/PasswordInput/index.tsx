import React, { ChangeEvent } from 'react';
import Button from '../../Button';
import style from './PasswordInput.module.scss';

type InputPropsType = {
  id: string;
  placeholder: string;
  value: string;
  inputname: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
  buttonTitle: string;
  setButtonTitle: React.Dispatch<React.SetStateAction<string>>;
};

const PasswordInput = ({
  id,
  placeholder,
  value,
  inputname,
  setValue,
  type,
  setType,
  buttonTitle,
  setButtonTitle,
}: InputPropsType) => {
  const handler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const submitHandler = () => {
    if (type === 'text') {
      setType('password');
    } else {
      setType('text');
    }

    if (buttonTitle === 'Показать пароль') {
      setButtonTitle('Скрыть пароль');
    } else {
      setButtonTitle('Показать пароль');
    }
  };
  return (
    // <label className={style.wrapper} htmlFor={id}>
    //   <span>{title}</span>
    //   <input id={id} placeholder={placeholder} value={value} onChange={handler} type={type} />
    <div className={style.password}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handler}
        name={inputname}
        id={id}
        required
      />
      <Button title={buttonTitle} onClick={submitHandler} />
    </div>
    // </label>
  );
};

export default PasswordInput;
