import { useState } from "react";
import { HandleNumbers } from "./interfaces/interfaces";
import NumberButton from "./components/numberButton";

const App = () => {
    const [result, setResult] = useState(0);

    const handleNumbers: HandleNumbers = (
        currentNumber,
        newNumber
    ): boolean => {
        const currentNumberTimesTen: number = currentNumber * 10;
        const finalNumber: number = currentNumberTimesTen + newNumber;
        setResult(finalNumber);
        return true;
    };

    return (
        <div>
            <div>{result}</div>
            <div>AC</div>
            <div>+/-</div>
            <div>%</div>
            <div>÷</div>
            <button onClick={() => handleNumbers(result, 7)}>7</button>
            <div><NumberButton</div>
            <div>9</div>
            <div>x</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>-</div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>+</div>
            <div>0</div>
            <div>.</div>
            <div>=</div>
        </div>
    );
};

export default App;
