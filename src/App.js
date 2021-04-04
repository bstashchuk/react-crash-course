import { useState } from "react";
import "./styles.css";
import LargeText from "./components/LargeText";
import Button from "./components/Button";

const App = () => {
  console.log("App Component was re-rendered");
  const [counter, setCounter] = useState(0);
  const buttonText = "Click me";
  const onClickHandler = () => {
    console.log(counter);
    setCounter(counter + 1);
  };
  return (
    <div className="App">
      <Button onClick={onClickHandler} buttonText={buttonText} />
      <LargeText text={`Button was clicked ${counter} times`} />
    </div>
  );
};

export default App;
