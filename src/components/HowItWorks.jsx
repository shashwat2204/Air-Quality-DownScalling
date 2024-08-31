import React from 'react';
import './HowItWorks.css';

function HowItWorks() {
  return (
    <section id="how-it-works" className="how-it-works fadeInUp">
      <div className="container">
        <h2>How It Works</h2>
        <p>
          Our model starts by fetching coarse-resolution satellite data for NO₂ concentrations.
          We then use machine learning algorithms to fill in missing values and downscale the data
          to a finer spatial resolution. Finally, we calculate the AQI based on the predicted NO₂
          concentrations, providing a detailed view of air quality at a local level.
        </p>
      </div>
    </section>
  );
}

export default HowItWorks;

