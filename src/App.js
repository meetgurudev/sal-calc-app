import React, { useState } from 'react';
import Header from './components/header/header';
import InputBox from './components/inputbox/inputbox';
import Slider from './components/slider/slider';
import MainTable from './components/main/maintable';
import Footer from './components/footer/footer';
import SideBar from './components/sidebar/sidebar';

import "./App.css"

const App = () => {
  const [inputNumber, setInputNumber] = useState(0);
  const [sliderValue, setSliderValue] = useState(50);

  const numbers = [inputNumber, sliderValue];

  let marks = {social: 46,
    science: 46,
    maths: 46,
    englis: 46}

  const handleSliderChange = (event) => {
    const newSliderValue = parseInt(event.target.value);
    setSliderValue(newSliderValue);
    setInputNumber(newSliderValue);
  };
  
  return (
    <div className="App">
      <Header />
      <InputBox 
        value={inputNumber} 
        setInputNumber={setInputNumber} 
      />
      
      <Slider value={sliderValue} setSliderValue={setSliderValue} onChange={handleSliderChange} />
            <MainTable 
              numbers={numbers} 
              marks={marks} 
              parent={"Great Mother"}
            />
      <SideBar />
      <Footer />
    </div>
  );
};

export default App;