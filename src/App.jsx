import { useState } from "react";
import Header from "./components/Header"
import Results from "./components/Results"
import UserInput from "./components/UserInput"

function App() {

  const [input, setInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 5,
    duration: 10,
});

const inputIsValid = input.duration >= 1;

function handleSetValue(inputIdentifier, newValue) {
    setInput(prevValue => {
        return {
            ...prevValue,
            [inputIdentifier]: +newValue,
        }
    })
}

  return (
    <>
      <Header />
      <UserInput 
        input={input}
        onChange={handleSetValue}
      />
      {inputIsValid ? 
        <Results input={input} /> : 
        <p className="center">Please enter a duration greater than zero "0"</p> 
      }
    </>
  )
}

export default App
