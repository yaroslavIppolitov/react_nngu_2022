import React, { ChangeEvent } from 'react';

type InputPropsType = {
  id: string;
  placeholder: string;
  value: string;
  inputname: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  type: string;
};

const Input = ({ id, placeholder, value, inputname, setValue, type }: InputPropsType) => {
  const handler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    // <label className={style.wrapper} htmlFor={id}>
    //   <span>{title}</span>
    //   <input id={id} placeholder={placeholder} value={value} onChange={handler} type={type} />
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handler}
      name={inputname}
      id={id}
      required
    />
    // </label>
  );
};

export default Input;
