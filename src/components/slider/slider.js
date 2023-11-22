import React from 'react';

const Slider = (props) => {
  return (
    <div className="slider">
      <label for="slider">Choose a value:</label>
      <input value={props.value} type="range" id="slider" min="0" max="100" defaultValue="50" />
    </div>
  );
};

export default Slider;