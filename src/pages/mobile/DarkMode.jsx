import React from 'react';
import Model from '../../components/Model';

export default function DarkMode() {
  return (
    <Model
      title={'Dark Mode'}
      src={'/video/mobile/dark-mode.mp4'}
      para1={
        'Users with sensitive light perception will be able to enable a system wide dark mode through the accessibility settings. This option can also be assigned to the quick-enable Accessibee button the same way as other accessibility settings. '
      }
    />
  );
}
