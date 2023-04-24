import React from 'react';
import ModelTop from '../../components/ModelTop';

export default function Screen() {
  return (
    <ModelTop
      title={'Screen Orientation'}
      src={'/video/website/screen_orientation.mp4'}
      para1={
        'This is the demonstration of screen orientation. People with different blindness can change the screen orientation according to theri type of blindness.\n For peripheral blindness, all the components will be squeezed to the centre. \n For central blindness, all components will be pushed to the sides and the centre will be a blank.'
      }
    ></ModelTop>
  );
}
