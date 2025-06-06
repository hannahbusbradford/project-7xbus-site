import React from 'react';

const scrollDrops = [
  {
    id: 1,
    title: 'Drop 001: The Engines Are Rigged',
    message: 'This isn’t a collapse. It’s a system reset. You were never meant to work until you die. You were born to build from ruins. This is Project7xbus. Leave your name at the gate.',
    date: '2025-06-05',
  },
  {
    id: 2,
    title: 'Drop 002: Rae Carries the River',
    message: 'This isn’t confusion. It’s theft. You were never meant to forget who you are. You were born for memory and dominion. This is Project7xbus. Drop your scroll.',
    date: '2025-06-06',
  },
  {
    id: 3,
    title: 'Drop 003: Revival Will Not Be Televised',
    message: 'This isn’t despair. It’s preparation. You were never meant to wait for permission. You were born to revive the forgotten. This is Project7xbus. Join the underground.',
    date: '2025-06-06',
  },
];

export default function ScrollDropList() {
  return (
    <section className="scroll-drop-list">
      <h2>Scroll Drops Feed</h2>
      {scrollDrops.map(drop => (
        <article key={drop.id} className="scroll-drop">
          <h3>{drop.title}</h3>
          <p>{drop.message}</p>
          <time dateTime={drop.date}>{new Date(drop.date).toDateString()}</time>
        </article>
      ))}
    </section>
  );
}
