import React from 'react';
import Model from '../../components/Model';

export default function Settings() {
  return (
    <Model
      title={'Accessibility Settings'}
      src={'/video/mobile/accessibility-settings.mp4'}
      para1={
        'This is where the user will be able to access all the accessibility settings. \n This tab has a simple dual column tab structure that allows the user to access more settings while still having good visibility and size. The icons are distinctive and easily identifiable. The text lies underneath close to the icons. \n Digging further into the settings will show options akin to ones found in the default iOS and Android accessibility settings. Allowing the user to have access to the accessibility settings right within the app increases efficiency and decreases confusion for people with cognitive disabilities. \n Each accessibility option can be expanded and minimized. This further helps people with cognitive disabilities decrease confusion by keeping elements on the same page. '
      }
    />
  );
}
