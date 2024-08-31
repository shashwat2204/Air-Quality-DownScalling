import React from 'react';
import './Features.css';

function Features() {
  return (
    <section id="features" className="features fadeInUp">
      <div className="container">
        <h2>Features</h2>
        <ul>
          <li><strong>High-Resolution Air Quality Maps:</strong> Generate fine-resolution maps of NO₂ concentrations from coarse-resolution satellite data.</li>
          <li><strong>Advanced Missing Data Imputation:</strong> Employ KNN and Random Forest techniques to accurately fill in missing data.</li>
          <li><strong>Accurate AQI Calculation:</strong> Calculate AQI based on NO₂ concentrations using standard breakpoints.</li>
          <li><strong>User-Friendly Interface:</strong> Intuitive design for easy navigation and access to key features.</li>
          <li><strong>Visualizations and Data Exploration:</strong> Interactive maps and charts for analyzing air quality trends.</li>
          <li><strong>Customizable Data Views:</strong> Filter and view data based on regions, time periods, or parameters.</li>
          <li><strong>Integration with Auxiliary Data:</strong> Combine NO₂ data with other variables like temperature and humidity.</li>
          <li><strong>Real-Time Updates:</strong> Receive the latest air quality data and predictions.</li>
          <li><strong>Downloadable Reports and Data:</strong> Export maps, AQI calculations, and data into various formats.</li>
          <li><strong>Open Source and Customizable:</strong> The application is open-source and customizable.</li>
          <li><strong>Support for Multiple Geographic Regions:</strong> Process and visualize air quality data from various regions.</li>
          <li><strong>Educational Resources:</strong> Access information on air quality and AQI significance.</li>
        </ul>
      </div>
    </section>
  );
}

export default Features;


