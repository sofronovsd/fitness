import classnames from 'classnames';
import React from 'react';

import './index.scss';

type ButtonColor = 'primary' | 'default';

type ButtonProps = {
  buttonText: string;
  color?: ButtonColor;
}

const Button = (props: ButtonProps) => {
  const {
    buttonText,
    color,
  } = props;

  const buttonClassNames = classnames('button', {
    'button__primary': color === 'primary',
  })

  return (
    <button className={buttonClassNames}>
      {buttonText}
    </button>
  );
};

export default Button;
