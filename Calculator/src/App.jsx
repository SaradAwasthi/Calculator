import { useState } from "react";
import "./App.css";
import Buttons from "./components/buttons";
import Display from "./components/display";

function App() {
    const [calVal, setCalVal] = useState("");

    const handleButtonClick = (buttonText) => {
        // console.log(buttonText);
        if (buttonText === "C") {
            setCalVal("");
        } else if (buttonText === "=") {
            setCalVal(eval(calVal));
        } else if (buttonText === "❌") {
            setCalVal(calVal.slice(0, -1));
        } else if (buttonText === "%") {
            setCalVal(calVal / 100);
        } else {
            setCalVal(calVal + buttonText);
        }
    };
    return (
        <div className="Container">
            <h1>Calculator</h1>
            <Display displayValue={calVal} />
            <Buttons handleButtonClick={handleButtonClick} />
        </div>
    );
}

export default App;
