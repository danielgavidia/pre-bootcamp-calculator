import { useState } from "react";
import ButtonNumber from "./components/ButtonNumber";
import ButtonClear from "./components/ButtonClear";
import ButtonPositiveNegative from "./components/ButtonPositiveNegative";
import ButtonPercentage from "./components/ButtonPercentage";
import ButtonDecimal from "./components/ButtonDecimal";
import Result from "./components/Result";

const App = () => {
    const [result, setResult] = useState(0);
    const [decimalBoolean, setDecimalBoolean] = useState(false);
    const [decimalMagnitude, setDecimalMagnitude] = useState(0.1);
    const [inputCount, setInputCount] = useState(0);

    console.log(`result: ${result}`);
    console.log(`decimalBoolean: ${decimalBoolean}`);
    console.log(`decimalMagnitude: ${decimalMagnitude}`);
    console.log(`inputCount: ${inputCount}`);

    const handleNumbers = (
        currentNumber: number,
        newNumber: number,
        decimalBoolean: boolean,
        decimalMagnitude: number
    ): void => {
        if (!decimalBoolean) {
            const currentNumberTimesTen: number = currentNumber * 10;
            const finalNumber: number = currentNumberTimesTen + newNumber;
            setResult(finalNumber);
            setInputCount(inputCount + 1);
        } else {
            const newNumberDecimal: number = newNumber * decimalMagnitude;
            const finalNumber: number = currentNumber + newNumberDecimal;
            const newDecimalMagnitude = decimalMagnitude * 0.1;
            setResult(finalNumber);
            setDecimalMagnitude(newDecimalMagnitude);
            setInputCount(inputCount + 1);
        }
    };

    const handleClear = (): void => {
        setResult(0);
        setInputCount(0);
        setDecimalBoolean(!decimalBoolean);
        setDecimalMagnitude(0.1);
    };

    const handlePositiveNegative = (result: number): void => {
        const newResult: number = result * -1;
        setResult(newResult);
    };

    const handlePercentage = (result: number): void => {
        const newResult: number = result * 0.01;
        setResult(newResult);
    };

    const handleDecimalBoolean = (): void => {
        const newDecimalBoolean: boolean = !decimalBoolean;
        setDecimalBoolean(newDecimalBoolean);
    };

    // const handleDecimalMagnitude = (): void => {
    //     const newDecimalMagnitude: number = decimalMagnitude * 0.1;
    //     setDecimalMagnitude(newDecimalMagnitude);
    // };

    return (
        <div>
            <div>
                <Result result={result} inputCount={inputCount} />
            </div>
            <div>
                <ButtonClear result={result} handleClear={handleClear} />
            </div>
            <div>
                <ButtonPositiveNegative
                    result={result}
                    handlePositiveNegative={handlePositiveNegative}
                />
            </div>
            <div>
                <ButtonPercentage
                    result={result}
                    handlePercentage={handlePercentage}
                />
            </div>
            <div>÷</div>
            <div>
                <ButtonNumber
                    handleNumbers={handleNumbers}
                    currentNumber={result}
                    newNumber={7}
                    decimalBoolean={decimalBoolean}
                    decimalMagnitude={decimalMagnitude}
                />
            </div>
            <div>
                <ButtonNumber
                    handleNumbers={handleNumbers}
                    currentNumber={result}
                    newNumber={8}
                    decimalBoolean={decimalBoolean}
                    decimalMagnitude={decimalMagnitude}
                />
            </div>
            <div>
                <ButtonNumber
                    handleNumbers={handleNumbers}
                    currentNumber={result}
                    newNumber={9}
                    decimalBoolean={decimalBoolean}
                    decimalMagnitude={decimalMagnitude}
                />
            </div>
            <div>x</div>
            <div>
                <ButtonNumber
                    handleNumbers={handleNumbers}
                    currentNumber={result}
                    newNumber={4}
                    decimalBoolean={decimalBoolean}
                    decimalMagnitude={decimalMagnitude}
                />
            </div>
            <div>
                <ButtonNumber
                    handleNumbers={handleNumbers}
                    currentNumber={result}
                    newNumber={5}
                    decimalBoolean={decimalBoolean}
                    decimalMagnitude={decimalMagnitude}
                />
            </div>
            <div>
                <ButtonNumber
                    handleNumbers={handleNumbers}
                    currentNumber={result}
                    newNumber={6}
                    decimalBoolean={decimalBoolean}
                    decimalMagnitude={decimalMagnitude}
                />
            </div>
            <div>-</div>
            <div>
                <ButtonNumber
                    handleNumbers={handleNumbers}
                    currentNumber={result}
                    newNumber={1}
                    decimalBoolean={decimalBoolean}
                    decimalMagnitude={decimalMagnitude}
                />
            </div>
            <div>
                <ButtonNumber
                    handleNumbers={handleNumbers}
                    currentNumber={result}
                    newNumber={2}
                    decimalBoolean={decimalBoolean}
                    decimalMagnitude={decimalMagnitude}
                />
            </div>
            <div>
                <ButtonNumber
                    handleNumbers={handleNumbers}
                    currentNumber={result}
                    newNumber={3}
                    decimalBoolean={decimalBoolean}
                    decimalMagnitude={decimalMagnitude}
                />
            </div>
            <div>+</div>
            <div>
                <ButtonNumber
                    handleNumbers={handleNumbers}
                    currentNumber={result}
                    newNumber={0}
                    decimalBoolean={decimalBoolean}
                    decimalMagnitude={decimalMagnitude}
                />
            </div>
            <div>
                <ButtonDecimal
                    decimalBoolean={decimalBoolean}
                    handleDecimalBoolean={handleDecimalBoolean}
                />
            </div>
            <div>=</div>
        </div>
    );
};

export default App;
