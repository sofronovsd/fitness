import React from 'react';
import imageA from '../../assets/image 10.png';
import imageB from '../../assets/image 9.png';
import imageC from '../../assets/image 11.png';
import ImageWrapper from '../ui/ImageWrapper';
import Button from '../ui/Button';

import './index.scss';

const WorkoutSection = () => {
  return (
    <section
      id="workout-section"
      className="workout-section_wrapper"
    >
      <div className="workout-section">
        <div className="workout-section_flash" />
        <div className="workout-section_rect" />
        <h2 className="workout-section_title">
          Workout
          Program
          Made
          For You
        </h2>
        <div className="workout-section_info">
          <p className="workout-section_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing.
          </p>
          <Button
            buttonText="Get Started"
            color="primary"
          />
        </div>

      </div>
      <div className="workout-section-images-grid">
        <ImageWrapper
          style={{gridArea: 'a'}}
          imageTitle="Jonathan Wise"
          imageDescription="Trainer"
        >
          <img src={imageA} style={{borderRadius: '10px'}} alt="pic1"/>
        </ImageWrapper>
        <ImageWrapper
          style={{gridArea: 'b'}}
          imageTitle="Samantha William"
          imageDescription="Trainer"
        >
          <img src={imageB} style={{borderRadius: '10px'}} alt="pic2"/>
        </ImageWrapper>
        <ImageWrapper
          style={{gridArea: 'c'}}
          imageTitle="Karen Summer"
          imageDescription="Trainer"
        >
          <img src={imageC} style={{borderRadius: '10px'}} alt="pic3"/>
        </ImageWrapper>
      </div>
    </section>
  );
};

export default WorkoutSection;
