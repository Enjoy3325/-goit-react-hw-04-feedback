import React from 'react';

export function Statistics({ good, neutral, bad }) {
  return (
    <div>
      <h2>Statistics</h2>
      <span>Good:{good}</span>
      <span>Neutral:{neutral}</span>
      <span>Bad:{bad}</span>
    </div>
  );
}
