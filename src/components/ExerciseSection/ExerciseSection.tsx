import React from 'react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import IndicatorBadge from '../ui/IndicatorBadge';

import './index.scss';

const ExerciseSection = () => {
  return (
    <section
      id="exercise-section"
      className="exercise-section"
    >
      <div className="exercise-section_left-column">
        <Badge
          type="new"
          color="primary"
          description="High Intensity workout to burn calories"
          className="badge"
        />
        <h2 className="exercise-section_title">
          Cardio
          Exercise
        </h2>
        <p className="exercise-section_description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.
        </p>
        <div className="exercise-section_buttons">
          <Button
            buttonText="Get Started"
            color="primary"
          />
          <Button buttonText="Preview"/>
        </div>
      </div>
      <div className="exercise-section_right-column">
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
  );
};

export default ExerciseSection;
