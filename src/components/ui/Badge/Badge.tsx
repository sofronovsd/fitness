import React from 'react';
import classnames from 'classnames';

import './index.scss';

type BadgeColor = 'primary';
type BadgeType = 'new';

type BadgeProps = {
  type: BadgeType;
  color: BadgeColor;
  description?: string;
  className?: string;
}

const Badge = (props: BadgeProps) => {
  const {
    type,
    color,
    description,
    className,
  } = props;

  const valueClassNames = classnames('badge_value', {
    'badge_value__primary': color === 'primary',
  })

  const wrapperClassNames = classnames('badge', className)

  return (
    <div className={wrapperClassNames}>
      <div className={valueClassNames}>{type}</div>
      {description && <div className="badge_description">{description}</div>}
    </div>
  );
};

export default Badge;
