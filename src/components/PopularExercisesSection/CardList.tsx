import React from 'react';
import Card from '../ui/Card';
import { popularExercises } from '../../data/popular-exercises';

const CardList = () => {
  return (
    <div className="popular-exercises-section_card-list">
      {popularExercises.map(ex => <Card id={ex.id} key={ex.id}/>)}
    </div>
  );
};

export default CardList;
