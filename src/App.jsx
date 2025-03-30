import { useState } from 'react';

import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx';

function App() {
  // Use an object containing each input value so we only need one state
  const [formData, setFormData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isValidInput = formData.duration >= 1;

  // Function that handles the changes occurring in the input fields
  function handleChange(identifier, newValue) {
    setFormData((prevUserInput) => {
      return {
        ...prevUserInput, // the input values that are not being changed (a copy)
        [identifier]: +newValue, // identifier (string) referring to the input field being altered, set to new value being inputted
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput formData={formData} onChange={handleChange} />
      {isValidInput ? (
        <Results formData={formData} />
      ) : (
        <p className="center">Please enter valid duration</p>
      )}
    </>
  );
}

export default App;
