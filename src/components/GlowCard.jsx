import React, { useRef } from "react";

const GlowCard = ({ card, children, idx }) => {
  const cardsRef = useRef([]);
  const handleMouseMove = (idx) => (e) => {
    const card = cardsRef.current[idx];
    if (!card) return;

    // Get Mouse Position Relative to the card
    const rect = card.getBoundingClientRect();
    const MouseX = e.clientX - rect.left - rect.width / 2;
    const MouseY = e.clientY - rect.top - rect.height / 2;

    // calc the angle from the center of the card 
    let angle = Math.atan2(MouseY,MouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360
    card.style.setProperty('--start', angle+60)

  };

  return (
    <div
      ref={(e) => (cardsRef.current[idx] = e)}
      onMouseMove={handleMouseMove(idx)}
      className="card card-border timeline-card rounded-xl p-10"
    >
      <div className="glow" />
      <div className="mb-5">
        {/* <p className="text-white-50 text-lg">{card.review}</p> */}
      </div>
      {children}
    </div>
  );
};

export default GlowCard;
