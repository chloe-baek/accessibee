import React from 'react';

export default function TwoCol({ title, subTitle }) {
  const general = ['a', 'b', 'c', 'd', 'e'];
  const listItems = general.map((c, index) => <li key={index}>{c}</li>);
  return (
    <m.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.25, duration: 0.5, ease: 'easeInOut' }}
    >
      <h3>{title}</h3>
      <h4>{subTitle}</h4>
      <ul>{listItems}</ul>
    </m.section>
  );
}
