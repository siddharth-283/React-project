import { useState } from "react";
import "./App.css";

function App() {
 
  const [counter, setCounter] = useState(0)

  // const addValue = () => {
  //   // console.log("value added", counter);
  //   if (counter < 20) {
  //     setCounter(counter + 1)
  //   } else {
  //     setCounter("Counter Value is Grater than 20")
  //   }
  // };

  // const removeValue = () => {
  //   if (counter > 0) {
  //     setCounter(counter - 1)
  //   } else {
  //     setCounter("Not allowed to print negative number")
  //   }
  // }
  
  const addValue = () => {
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
  }
  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>chai aur Code</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button
        onClick={removeValue}
      >Remove Value</button>
    </>
  );
}

export default App;