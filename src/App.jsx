import Display from "./assets/components/Display";
import ButtonContainer from "./assets/components/ButtonContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  let [calVal, setCalVal] = useState("");
  const buttonClick = (buttonName) => {
    if (buttonName === "C") {
      setCalVal("");
    } else if (buttonName === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newVal = calVal + buttonName;
      setCalVal(newVal);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display dipsplayVal={calVal}></Display>
      <ButtonContainer onButtnClick={buttonClick}></ButtonContainer>
    </div>
  );
}

export default App;
