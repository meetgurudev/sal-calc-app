import React from 'react';

const InputBox = (props) => {
  return (
    <div className="input-box">
      <label for="input">Enter a value:</label>
      <input type="text" value={props.value} id="input" />
    </div>
  );
};

export default InputBox;