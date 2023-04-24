import React from 'react';
import ModelTop from '../../components/ModelTop';

export default function Screen() {
  return (
    <ModelTop
      title={'Screen Orientation'}
      src={'/video/website/screen_orientation.mp4'}
      para1={
        "The text is large. This is to make content easier to read. Buttons with different functions are shaped differently so that viewers can easily remember and recognize them. AI auto-generates a summary of the conversation so that users don't have to open the conversation to look for content"
      }
    ></ModelTop>
  );
}
