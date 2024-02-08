import React from 'react'

export default function AboutCard({card}) {
  return (
    <div className="aboutCard">
      <img src={card.src} alt="img" />
      <h2>{card.title}</h2>
      <p>{card.content}</p>
    </div>
  );
}
