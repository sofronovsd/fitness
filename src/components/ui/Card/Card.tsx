import React from 'react';

import { Exercise, popularExercises } from '../../../data/popular-exercises';

import './index.scss';

type CardProps = {
  id: number,
}

const Card = (props: CardProps) => {
  const {
    id,
  } = props;

  const [item, setItem] = React.useState<Exercise | undefined>(undefined);

  React.useEffect(() => {
    const exercise = popularExercises.find(ex => ex.id === id);
    if (exercise) {
      setItem(exercise);
    }
  }, [id]);

  return (
    item
      ? (
        <div className="card">
          <div
            className="card_image"
            style={{background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 80%, #000000 100%), url('${item.image}') no-repeat`}}
          >
            <div className="card_corner">
              {item.time}
            </div>
          </div>
          <div className="card_overlay">
            <h3 className="card_title">{item.title}</h3>
            <h3 className="card_description">{item.description}</h3>
          </div>
        </div>
      )
      : (
        <span>loading...</span>
      )

  );
};

export default Card;
