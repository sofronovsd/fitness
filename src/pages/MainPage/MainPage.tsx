import React from 'react';
import Button from '../../components/ui/Button';

import './index.scss';
import IndicatorBadge from '../../components/ui/IndicatorBadge';
import Badge from '../../components/ui/Badge';
import PopularExercisesSection from '../../components/PopularExercisesSection';

const MainPage = () => {
  return (
    <div className="main-page_wrapper">
      <section className="main-page_exercise">
        <div className="main-page_left-column">
          <Badge
            type="new"
            color="primary"
            description="High Intensity workout to burn calories"
          />
          <h2 className="main-page_title">
            Cardio
            Exercise
          </h2>
          <p className="main-page_description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
          <div className="main-page_buttons">
            <Button
              buttonText="Get Started"
              color="primary"
            />
            <Button buttonText="Preview"/>
          </div>
        </div>
        <div className="main-page_right-column">
          <IndicatorBadge
            value="38:14"
            description="TIME"
            color="yellow"
          />
          <IndicatorBadge
            value="165"
            description="EST CALORIES"
            color="red"
          />
        </div>

      </section>
      <PopularExercisesSection/>
    </div>
  );
};

export default MainPage;
