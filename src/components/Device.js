import React from 'react';
import '../styles.css';
import deviceVideo from '../images/video.mp4';
import deviceImage from '../images/1.jpg';

const Device = () => (
  <section className="device" id="device">
    <h2>Cihazımızla Tanışın</h2>
    <div className="device-content">
      <img src={deviceImage} alt="Device" />
      <video src={deviceVideo} controls>
        <track kind="captions" srcLang="en" label="English" />
      </video>
    </div>
  </section>
);

export default Device;
