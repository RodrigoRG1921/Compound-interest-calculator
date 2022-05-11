import { useState } from 'react';
import InputBox from './Components/InputBox'
import './Styles/styles.css'
import ResultBox from './Components/showResult'

const calculation = ({years, current, additionMonthly, rate}) => {
  let result = 0
  let additionYearly = additionMonthly*12
  for(let i=0; i<years; i++){
    current = (current + additionYearly) * (rate+1)
    result = current

  }
  return result
  }


function App() {
  const [initialBalance, setInitialBalance] = useState("");
  const [monthlyAddition, setMonthlyAddition] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [yearsToCompound, setYearsToCompound] = useState("");
  const [result, setResult] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const handleBalanceChange = (event) =>{
    setInitialBalance(event.target.value)
  }
  const handleMonthlyDepositChange = (event) =>{
    setMonthlyAddition(event.target.value)
  }
  const handleInterestRateChange = (event) =>{
    setInterestRate(event.target.value)
  }
  const handleYearsToCompoundChange = (event) =>{
    setYearsToCompound(event.target.value)
  }

  console.log(result)

//P(1 + (r/12) )12t - P
  const handleClick = () =>{
    let resultado = 0
    resultado = calculation({
      years: parseFloat(yearsToCompound),
      current: parseFloat(initialBalance),
      rate: parseFloat(interestRate),
      additionMonthly: parseFloat(monthlyAddition)
    })
    resultado = resultado.toLocaleString("en-US");
    setResult(resultado)
    setIsSubmit(!isSubmit)
    console.log(result)
    console.log(resultado)
  }
  return (
      <div className="appBox">
        <div>
          <h1>Compound interest calculator</h1>
          <div className="formBox">
            <InputBox valueToAsk='Initial balance: ' inputValue={initialBalance} onChange={handleBalanceChange} />
            <InputBox valueToAsk='Monthly deposit: ' inputValue={monthlyAddition} onChange={handleMonthlyDepositChange} />
            <InputBox valueToAsk='Interest rate: ' inputValue={interestRate} onChange={handleInterestRateChange} />
            <InputBox valueToAsk='Years to grow: ' inputValue={yearsToCompound} onChange={handleYearsToCompoundChange} />
            <button onClick={handleClick}> Submit</button>
          </div>
        </div>
        {isSubmit ? <ResultBox result={result}/> : ""}
      </div>

  );
}

export default App;
