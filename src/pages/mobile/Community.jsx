import React from 'react';
import Model from '../../components/Model';

export default function Community() {
  return (
    <Model
      title={'Community'}
      src={'/video/mobile/community.mp4'}
      para1={
        'The community tab is where the user can explore and engage in communities they wish to participate in on Accessibee. The app allows users with disabilities to participate and engage in activities related to their own disabilities or simply communities they have interest in. It’s a fun area to chat, comment, and discuss areas of your interest with other people on Accessibee.'
      }
      para2={
        'Notable accessibility design choices include using card views to display communities of interest with bold white text on a dark background shadow. This allows for maximum contrast while still being able to view the corresponding images.'
      }
    />
  );
}
