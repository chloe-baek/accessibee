import React from 'react';
import { motion as m } from 'framer-motion';

export default function Personas() {
  const listStyle = 'list-disc text-md';
  const boxStyle =
    'block md:flex md:items-center md:justify-evenly border-2 rounded-xl p-5 border-gray-400 max-w-screen-xl mx-auto my-7 shadow-lg dark:shadow-white dark:shadow-md';
  function itemList(list) {
    return list.map((item, index) => (
      <li className={listStyle} key={index}>
        {item}
      </li>
    ));
  }
  const anita = [
    'Age: 44',
    'Gender: Female',
    'Occupation: Purchaser',
    'Environments: work office with other coworkers, home with family, bus and train stations',
    'Technology Knowledge and Usage: uses technology every day at work and home. Relies on voice to text for everything from texting to browsing',
    'Technology Likes: voice-to-text, screen readers',
    'Technology Dislikes: auto-snapping for windows/tabs, not a lot of ways to tell what she is hovering over/clicking',
    'Problem: Not able to properly see screens',
    'Needs: A way to see what she is ordering for her work without straining her neck or moving windows around',
  ];
  const ike = [
    'Age: 25',
    'Gender: Male',
    'Occupation: Video Editor',
    'Environments: home with partner, family homes of nearby relatives (children, siblings)',
    'Technology Knowledge and Usage: uses technology all the time at work and home. Relies on partner and coworkers to get colours right',
    'Technology Likes: built in colourblind filters, high contrast filters',
    'Technology Dislikes: unreadable text on websites due to poor contrast',
    'Problem: Not able to colour correct videos properly due to colourblindness',
    'Needs: An indicator that will allow him to know what colours, that aren’t red and green, are without having to rely on someone, and/or have an alternative way of colour correcting that doesn’t rely on sight',
  ];
  const joseph = [
    'Age: 74',
    'Gender: Male',
    'Occupation: Retired',
    'Technology Knowledge and Usage: Only uses technology to talk to long-distance family and reading',
    'Technology Likes: high contrast, bigger font options',
    "Technology Dislikes: unreadable text on websites with poor contrast, websites that don't have the ability to increase contrast/doesn't have built in contrast adjustment that matches the device",
    'Problem: Not able to read articles on Facebook and other websites without asking for help',
    'Needs: The ability to increase contrast on page and/or screen reader',
  ];
  const anna = [
    'Anne is healthy and does not have a particular disability, but she has a problem remembering things like a story her neighbour told a month ago.',
    '80',
    'Living with her daughter',
    'No job',
    'Stays at home',
    'Use a desktop computer to read books. Sometimes, she uses an iPad to read.',
    'She is nice to neighbours and likes talking to people.',
    'She has a best friend – Sarah.',
    'She likes reading and cats.',
    'She only knows how to turn on a computer. When she wants to read books, she needs her 	daughter to help her in searching for books and open the webpage.',
    'She wants to be able to read books online without the help of her daughter.',
    'Anne enjoys reading but forgets things that she has read a couple days ago from time to time. When she starts reading from the content that she has read before, she feels unfamiliar with the new content because she loses threads of the context. She finds it frustrating and has to start over again.',
  ];
  const alex = [
    'Age: 41',
    'Occupation: Financial Analyst',
    'Usage time of the internet or digital media',
    'Alex has been hearing hard since childhood and relies heavily on hearing aids to communicate with others. He works for a large investment firm. He enjoys attending social events in the deaf community.',
    'Alex wants to be able to use the internet and digital media with ease and efficiency, without any barriers caused by his hearing impairment. Whenever he watches media content with closed captions or other accessible audio, he wants to be able to enjoy it. He also wants to be able to communicate effectively with colleagues and clients, both in-person and online.',
    'Alex faces several challenges related to his hearing impairment when using digital media, including difficulty understanding spoken instructions or dialogue in videos, difficulty distinguishing sounds in noisy environments, and a lack of awareness and understanding of hearing loss and accessibility issues among web developers.',
  ];
  const carol = [
    'Carol is healthy. But she could not remember things that happened 1 week ago.',
    '65',
    'Living with her husband - Roger Pierce',
    'Carol does not have a job. She is retired.',
    'She sometimes plays pickle ball with her friends.',
    'She walks her dog at her community.',
    'She always stays at home with her husband.',
    'She sometimes goes shopping.',
    'She uses an iPad and a desktop computer.',
    'Carol loves talking online using Facebook.',
    'She is not good at technology but can do basic things on Facebook. And she is eager to learn.',
    'She wats to chat with other people online without forgetting other peoples’ information.',
    'Carol enjoys chatting with others. But she forgets things from time to time. Luckily, her husband understands it and is always patient repeating things that have happened in the last week or month. However, she finds it hard to chat with other people (other old folks at online communities) because she sometimes forgets the things her friends have told her. And she is sad because she thinks her forgetting things makes her friend feel unpleasant.',
  ];
  return (
    <m.section
      className='w-full h-full min-h-0 overflow-y-auto'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.25, duration: 0.5, ease: 'easeInOut' }}
    >
      <h3 className='mr-10 mt-10 ml-12 pb-4 text-center text-4xl lg:text-5xl font-serif font-semibold border-b-2 border-gray-500'>
        Personas
      </h3>
      <div className='ml-4 py-6 px-8 md:px-20'>
        <p className='text-md xl:text-lg py-4 leading-7 xl:leading-8'>
          It’s crucial to understand the kinds of problems you’re designing for.
          Understanding who to design for nets even better results. Our group
          came up with these proto-personas based on our research.
        </p>
        <div className={boxStyle}>
          <img
            src='/img/personas/Anita.jpg'
            alt='portrait of Anita'
            className=' my-3 mx-auto md:m-0 w-2/5 h-2/5 rounded-full min-w-[200px] max-w-[280px]'
          />
          <div className='pl-7  basis-3/5'>
            <h4 className='font-bold text-2xl'>Anita Mara</h4>
            <h5 className='font-semibold text-lg italic'>
              Low Vision (Central)
            </h5>
            <ul className='pl-5'>{itemList(anita)}</ul>
          </div>
        </div>
        <div className={boxStyle}>
          <img
            src='/img/personas/Ike.jpg'
            alt='portrait of Ike'
            className=' my-3 mx-auto md:m-0 w-2/5 h-2/5 rounded-full min-w-[200px] max-w-[280px]'
          />
          <div className='pl-7  basis-3/5'>
            <h4 className='font-bold text-2xl'> Ike Dewi</h4>
            <h5 className='font-semibold text-lg italic'>
              Colourblind (Red-Green)
            </h5>
            <ul className='pl-5'>{itemList(ike)}</ul>
          </div>
        </div>
        <div className={boxStyle}>
          <img
            src='/img/personas/Joseph.jpg'
            alt='portrait of Joseph'
            className=' my-3 mx-auto md:m-0 w-2/5 h-2/5 rounded-full min-w-[200px] max-w-[280px]'
          />
          <div className='pl-7  basis-3/5'>
            <h4 className='font-bold text-2xl'> Joseph Rostom</h4>
            <h5 className='font-semibold text-lg italic'>
              Complete Colourblindness
            </h5>
            <ul className='pl-5'>{itemList(joseph)}</ul>
          </div>
        </div>
        <div className={boxStyle}>
          <img
            src='/img/personas/Anna.jpg'
            alt='portrait of Anna'
            className=' my-3 mx-auto md:m-0 w-2/5 h-2/5 rounded-full min-w-[200px] max-w-[280px]'
          />
          <div className='pl-7 basis-3/5'>
            <h4 className='font-bold text-2xl'> Anna Maria </h4>
            <h5 className='font-semibold text-lg italic'>likes to read</h5>
            <ul className='pl-5'>{itemList(anna)}</ul>
          </div>
        </div>
        <div className={boxStyle}>
          <img
            src='/img/personas/Nate.jpg'
            alt='portrait of Nate'
            className=' my-3 mx-auto md:m-0 w-2/5 h-2/5 rounded-full min-w-[200px] max-w-[280px]'
          />
          <div className='pl-7 basis-3/5'>
            <h4 className='font-bold text-2xl pb-4'> Nate</h4>
            <p>
              Nate is a young adult who has been legally blind ever since his
              early teens. He used to be able to see more clearly but now he is
              barely able to make out images, it is all hazy no matter the
              distance or size. He finds that most social networking apps don’t
              account for this, and that only some of them have recently
              included screen reader functionalities, closed captioning, and alt
              text.
            </p>
          </div>
        </div>
        <div className={boxStyle}>
          <img
            src='/img/personas/Alex.jpg'
            alt='portrait of Alex'
            className=' my-3 mx-auto md:m-0 w-2/5 h-2/5 rounded-full min-w-[200px] max-w-[280px]'
          />
          <div className='pl-7 basis-3/5'>
            <h4 className='font-bold text-2xl'>Alex</h4>
            <h5 className='font-semibold text-lg italic'>Hearing Impairment</h5>
            <ul className='pl-5'>{itemList(alex)}</ul>
          </div>
        </div>
        <div className={boxStyle}>
          <img
            src='/img/personas/Carol.jpg'
            alt='portrait of Carol'
            className=' my-3 mx-auto md:m-0 w-2/5 h-2/5 rounded-full min-w-[200px] max-w-[280px]'
          />
          <div className='pl-7 basis-3/5'>
            <h4 className='font-bold text-2xl'>Carol Pierce </h4>
            <h5 className='font-semibold text-lg italic'>likes to chat</h5>
            <ul className='pl-5'>{itemList(carol)}</ul>
          </div>
        </div>
        <div className={boxStyle}>
          <img
            src='/img/personas/Sienna.jpg'
            alt='portrait of Sienna'
            className='my-3 mx-auto md:m-0 w-2/5 h-2/5 rounded-full min-w-[200px] max-w-[280px]'
          />
          <div className='pl-7 basis-3/5'>
            <h4 className='font-bold text-2xl pb-4'> Sienna</h4>
            <p>
              Sienna is not legally blind, but she does have poor vision overall
              and wears glasses. In instances where sienna is not able to access
              her glasses, she would like to be able to view her phone and the
              corresponding apps the best she can. She feels that if text size
              and contrast on apps we’re better from the default she’d be able
              to make do and still be able to make out the interface and text. 
            </p>
          </div>
        </div>
        {/* <div className={boxStyle}>
          <img
            src='/img/personas/Anita.jpg'
            alt='portrait of Anita'
            className=' my-3 mx-auto md:m-0 w-2/5 h-2/5 rounded-full min-w-[200px] max-w-[280px]'
          />
          <div className='pl-7 basis-3/5'>
            <h4 className='font-bold text-2xl pb-4'> Frank</h4>
            <p>
              Nate is a young adult who has been legally blind ever since his
              early teens. He used to be able to see more clearly but now he is
              barely able to make out images, it is all hazy no matter the
              distance or size. He finds that most social networking apps don’t
              account for this, and that only some of them have recently
              included screen reader functionalities, closed captioning, and alt
              text.
            </p>
          </div>
        </div> */}
      </div>
    </m.section>
  );
}
