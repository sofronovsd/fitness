import React from 'react';
import classnames from 'classnames';

import './index.scss';

type IndicatorBadgeColor = 'red' | 'yellow';

type IndicatorBadgeProps = {
  value: string;
  description: string;
  color: IndicatorBadgeColor;
}

const IndicatorBadge = (props: IndicatorBadgeProps) => {
  const {
    value,
    description,
    color,
  } = props;

  const valueClassNames = classnames('indicator-badge_value', {
    'indicator-badge_value__yellow': color === 'yellow',
    'indicator-badge_value__red': color === 'red',
  })

  return (
    <div className="indicator-badge">
      <div className={valueClassNames}>{value}</div>
      <div className="indicator-badge_description">{description}</div>
    </div>
  );
};

export default IndicatorBadge;
