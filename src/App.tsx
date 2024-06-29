import { useState } from "react";

interface HandleNumbers {
    currentNumber: number;
    newNumber: number;
}

const App = () => {
    const [result, setResult] = useState(0);

    const handleNumbers = ({
        currentNumber,
        newNumber,
    }: HandleNumbers): boolean => {
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
            <button
                onClick={() =>
                    handleNumbers({ currentNumber: result, newNumber: 7 })
                }
            >
                7
            </button>
            <div>8</div>
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
