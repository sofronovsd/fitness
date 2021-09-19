import React from 'react';

import './index.scss';

type IconProps = {
  className: string;
}

const Icon = (props: IconProps) => {
  const {
    className,
  } = props;

  return (
    <div className={className}/>
  );
};

export default Icon;
