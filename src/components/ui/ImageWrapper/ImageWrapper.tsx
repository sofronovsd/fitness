import React from 'react';

import './index.scss';

type ImageWrapperProps = {
  imageTitle: string;
  imageDescription: string;
}

const ImageWrapper = (props: ImageWrapperProps & React.HTMLProps<HTMLDivElement>) => {
  const {
    children,
    imageTitle,
    imageDescription,
    ...rest
  } = props;

  return (
    <div
      className="image-wrapper"
      {...rest}
    >
      {children}
      <div className="image-wrapper_info">
        <h4 className="image-wrapper_title">{imageTitle}</h4>
        <span className="image-wrapper_description">{imageDescription}</span>
      </div>
    </div>
  );
};

export default ImageWrapper;
