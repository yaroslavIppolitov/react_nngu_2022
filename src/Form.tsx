import React from 'react';
import Input from './input';

type FormPropsType = {
  title: string;
};

const Form = ({ title }: FormPropsType) => (
  <div>
    <h1>{title}</h1>
    <div className="form_inputs">
      <Input />
    </div>
  </div>
);

export default Form;
