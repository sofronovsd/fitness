import React from 'react';
import PopularExercisesSection from '../../components/PopularExercisesSection';
import WorkoutSection from '../../components/WorkoutSection';
import ExerciseSection from '../../components/ExerciseSection';

import './index.scss';

const MainPage = () => {
  return (
    <div className="main-page_wrapper">
      <ExerciseSection/>
      <PopularExercisesSection/>
      <WorkoutSection/>
    </div>
  );
};

export default MainPage;
