import React from 'react';
import imageA from '../../assets/image 10.png';
import imageB from '../../assets/image 9.png';
import imageC from '../../assets/image 11.png';

import './index.scss';
import ImageWrapper from '../ui/ImageWrapper';

const WorkoutSection = () => {
  return (
    <section className="workout-section_wrapper">
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
