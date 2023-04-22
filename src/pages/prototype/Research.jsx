import React from 'react';
import { motion as m } from 'framer-motion';

export default function Research() {
  const general = [
    'Keep things simple and readable',
    'Keep content and images limited, less is more',
    'Bigger content size, less contrast needed',
    "Format content so it's easily read and understood by users of all kinds (able bodied, hearing impaired, sight impaired)",
    'The standard keyboard is the one that people familiarize themselves with, no need to change it',
    'Give users the ability to change the orientation of their screen',
    'Consistency in layouts help the user navigate',
    'Keep the important elements on each page',
    'Make sure the user knows the function of buttons',
    "Don't let icons be too similar",
    'Familiarity with regular icons',
  ];
  const blindness = [
    'Central: not being able to see things in the centre of your vision.',
    ' Peripheral: not being able to see things out of the corners of your eyes.',
    'Night Blindness: not being able to see in low light.',
    'Audio indicators for clicking, hovering, etc',
    'Speech-to-text and text-to-speech',
    'Limited colours and design system for colour-blind options',
    'Higher brightness and contrast',
    'Magnify button',
    'Larger font option',
    'Ability to have larger keyboard',
    'Keyboard shortcuts',
    'Symbols for alerts, not just colour changes',
    'Alt text for images and written video descriptions',
    'Specific headers for each section',
  ];
  const cognitive = [
    'Design for memory and recognition',
    'Annotation system for articles and messaging',
    'Larger text and content for easier readability',
    'Replay-able tutorial and easily accessible help section with step-by-step instructions',
    'Visual cues, similar to hearing loss visual cues',
    '“Click for more information” to give users more information on what buttons do',
    'Focus area that dims the screen accept the area that is focused on',
    'Keep things simple',
    'Printability and screenshots',
    'Make the purpose of the website clear',
    'No generic call to actions, be specific',
    'Give the user directions of how to use the website and its functions',
    'Large buttons',
    'Categorized and easily accessible communities and discussions',
    'Keep navigation simple, don’t hide navigation options',
    'Keep everything together but make the difference between the content on the page obvious',
    'Be able to change how the text appears',
    'Make images easily distinguishable',
    'Image descriptions should be clear with what the image is and its purpose',
  ];
  const hearing = [
    '20% of the world population has hearing loss',
    'Captions and visual cues',
    'Keyboard interactivity, everything should be usable without the mouse',
    'Sign language use in videos',
    'Always use plain English',
  ];

  const listStyle = 'list-disc text-md';
  const headingStyle = 'font-bold text-2xl pt-10';
  const containerStyle = 'pl-6 py-3 leading-7';

  function itemList(list) {
    return list.map((item, index) => (
      <li className={listStyle} key={index}>
        {item}
      </li>
    ));
  }

  // const generalList = general.map((list, index) => (
  //   <li className={listStyle} key={index}>
  //     {list}
  //   </li>
  // ));
  // const blindnessList = blindness.map((list, index) => (
  //   <li className={listStyle} key={index}>
  //     {list}
  //   </li>
  // ));
  // const cognitiveList = cognitive.map((list, index) => (
  //   <li className={listStyle} key={index}>
  //     {list}
  //   </li>
  // ));
  // const hearingList = hearing.map((list, index) => (
  //   <li className={listStyle} key={index}>
  //     {list}
  //   </li>
  // ));

  return (
    <m.section
      className='w-full h-full min-h-0 overflow-y-auto'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.25, duration: 0.5, ease: 'easeInOut' }}
    >
      {/* [4.25rem] */}
      <h3 className='mr-10 mt-10 ml-12 pb-4 text-center text-4xl lg:text-5xl font-serif font-semibold border-b-2 border-gray-500'>
        Refined Research Guidelines
      </h3>
      <div className='ml-4 block md:flex md:justify-evenly'>
        <div className='basis-[45%] max-w-sm md:max-w-lg'>
          <h4 className={headingStyle}>General</h4>
          <ul className={containerStyle}>{itemList(general)}</ul>
          <h4 className={headingStyle}>Low-Vision and Blindness</h4>
          <ul className={containerStyle}>{itemList(blindness)}</ul>
        </div>
        <div className='basis-[45%] max-w-sm md:max-w-lg'>
          <h4 className={headingStyle}>Cognitive</h4>
          <ul className={containerStyle}>{itemList(cognitive)}</ul>
          <h4 className={headingStyle}>Hearing</h4>
          <ul className={containerStyle}>{itemList(hearing)}</ul>
        </div>
      </div>
    </m.section>
  );
}
