import React from 'react';
import ModelTop from '../../components/ModelTop';

export default function Notepad() {
  return (
    <ModelTop
      title={'Notepad'}
      src={'/video/website/notepad.mp4'}
      para1={
        'notepad is for people with cognitive disabilities who forget things frequently.\n This helps them remember things.'
      }
    ></ModelTop>
  );
}
