import React from 'react';

import Header from './Header';
import CardList from './CardList';

import './index.scss';

const PopularExercisesSection = () => {
  return (
    <section
      id="popular-exercises-section"
      className="popular-exercises-section_wrapper"
    >
      <Header/>
      <CardList/>
    </section>
  );
};

export default PopularExercisesSection;
