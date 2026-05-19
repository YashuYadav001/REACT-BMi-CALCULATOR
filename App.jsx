import React, { useState } from 'react';
import './App.css';




const App = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  const calcBmi = () => {
    
    if (weight === '' || height === '') {
      alert('Please enter values');
      return;
    }

    const bmiValue = (
      weight / (height * height)
    ).toFixed(1);

    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      setMessage('Underweight');
    } 
    else if (bmiValue >= 18.5 && bmiValue < 25) {
      setMessage('Normal Weight');
    } 
    else if (bmiValue >= 25 && bmiValue < 30) {
      setMessage('Overweight');
    } 
    else {
      setMessage('Obese');
    }
  };

  const reload = () => {
    setWeight('');
    setHeight('');
    setBmi('');
    setMessage('');
  };

  return (
    <div className="App">
      <div className="container">

        <h1>BMI Calculator</h1>

        <div>
          <label>Weight (kg)</label>
          <br />

          <input
            type="number"
            placeholder="Enter weight"
            value={weight}
            onChange={(e) =>
              setWeight(e.target.value)
            }
          />
        </div>

        <div>
          <label>Height (m)</label>
          <br />

          <input
            type="number"
            step="0.01"
            placeholder="Enter height"
            value={height}
            onChange={(e) =>
              setHeight(e.target.value)
            }
          />
        </div>

        <div className="buttons">

          <button onClick={calcBmi}>
            Submit
          </button>

          <button onClick={reload}>
            Reload
          </button>

        </div>

        <div className="center">

          {bmi && (
            <h2>Your BMI: {bmi}</h2>
          )}

          {message && (
            <h3>{message}</h3>
          )}

        </div>

      </div>
    </div>
  );
};

export default App;