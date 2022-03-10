import React, { SyntheticEvent } from 'react';

type NameComponentPropsType = {
  firstname: string;
  lastname: string;
};

const NameComponent = (props: NameComponentPropsType) => {
  const { lastname, firstname } = props;
  const handler = (event: SyntheticEvent) => {
    console.log(event.currentTarget, 'currentTarget');
    console.log(event.target, 'target');
  };

  return (
    <div className="wrapper">
      <p>{firstname}</p>
      <p>{lastname}</p>
      <button type="button" onClick={handler}>
        Click me
      </button>
    </div>
  );
};

export default NameComponent;
