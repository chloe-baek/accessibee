import React from 'react';
import ModelTop from '../../components/ModelTop';

export default function Color() {
  return (
    <ModelTop
      title={'Color Scheme'}
      src={'/video/website/color_scheme.mp4'}
      para1={
        'This is how a color-blind person can select and apply red-blue color scheme to the page if orange-and-red does not fit him.'
      }
    ></ModelTop>
  );
}
