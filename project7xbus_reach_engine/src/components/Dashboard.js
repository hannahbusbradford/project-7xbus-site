import React from 'react';

export default function Dashboard() {
  // Dummy metrics to represent your Reach Engine formula components
  const presence = 7; // number of platforms
  const emotionalPull = 9; // emotional intensity (scale 1-10)
  const participation = 5; // participation rate (scale 1-10)
  const leveragePoints = 4; // number of leverage points
  const depthOfLeverage = 3; // depth per leverage point

  const reachImpactScore =
    presence * emotionalPull * participation * leveragePoints * depthOfLeverage;

  return (
    <section className="dashboard">
      <h2>Reach Engine Dashboard</h2>
      <ul>
        <li>Presence (Platforms): {presence}</li>
        <li>Emotional Pull (Intensity): {emotionalPull} / 10</li>
        <li>Participation (Engagement): {participation} / 10</li>
        <li>Leverage Points (Channels): {leveragePoints}</li>
        <li>Depth of Leverage: {depthOfLeverage}</li>
      </ul>
      <p>
        <strong>Reach Impact Score:</strong> {reachImpactScore.toLocaleString()}
      </p>
      <small>
        (Calculated as Presence × Emotional Pull × Participation × Leverage Points
        × Depth of Leverage)
      </small>
    </section>
  );
}
