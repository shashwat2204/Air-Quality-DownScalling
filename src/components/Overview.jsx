import React from 'react';
import './Overview.css';

function Overview() {
  return (
    <section id="overview" className="overview fadeInUp">
      <div className="container">
        <h2>Overview</h2>
        <p>
          Our application leverages advanced AI/ML techniques to downscale satellite-based air quality data,
          specifically NO₂ concentrations, to create high-resolution maps. These maps provide detailed insights
          into air quality at a local level, helping researchers and policymakers monitor and improve air quality.
        </p>
      </div>
    </section>
  );
}

export default Overview;
