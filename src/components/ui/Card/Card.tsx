import React from 'react';
import image from '../../../assets/cards/image 2.png';

import './index.scss';

type CardProps = {}

const Card = (props: CardProps) => {
  const {} = props;

  return (
    <div className="card">
      <div className="card_image" />
      <div className="card_overlay">
        <h3 className="card_title">Yoga</h3>
        <h3 className="card_description">250 est calories</h3>
      </div>
    </div>

  );
};

export default Card;
