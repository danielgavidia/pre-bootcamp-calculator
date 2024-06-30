import { useState } from "react";
import ButtonNumber from "./components/ButtonNumber";
import ButtonClear from "./components/ButtonClear";
import ButtonPositiveNegative from "./components/ButtonPositiveNegative";
import ButtonPercentage from "./components/ButtonPercentage";
import ButtonDecimal from "./components/ButtonDecimal";

const App = () => {
    const [result, setResult] = useState(0);
    const [decimalBoolean, setDecimalBoolean] = useState(false);
    const [decimalMagnitude, setDecimalMagnitude] = useState(1);

    console.log(decimalBoolean);

    const handleNumbers = (currentNumber: number, newNumber: number): void => {
        const currentNumberTimesTen: number = currentNumber * 10;
        const finalNumber: number = currentNumberTimesTen + newNumber;
        setResult(finalNumber);
    };

    const handleClear = (): void => {
        setResult(0);
        setDecimalBoolean(!decimalBoolean);
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

    const handleDecimalMagnitude = (): void => {
        const newDecimalMagnitude: number = decimalMagnitude * 0.1;
        setDecimalMagnitude(newDecimalMagnitude);
    };

    return (
        <div>
            <div>{result}</div>
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
                />
            </div>
            <div>
                <ButtonNumber
                    handleNumbers={handleNumbers}
                    currentNumber={result}
                    newNumber={8}
                />
            </div>
            <div>
                <ButtonNumber
                    handleNumbers={handleNumbers}
                    currentNumber={result}
                    newNumber={9}
                />
            </div>
            <div>x</div>
            <div>
                <ButtonNumber
                    handleNumbers={handleNumbers}
                    currentNumber={result}
                    newNumber={4}
                />
            </div>
            <div>
                <ButtonNumber
                    handleNumbers={handleNumbers}
                    currentNumber={result}
                    newNumber={5}
                />
            </div>
            <div>
                <ButtonNumber
                    handleNumbers={handleNumbers}
                    currentNumber={result}
                    newNumber={6}
                />
            </div>
            <div>-</div>
            <div>
                <ButtonNumber
                    handleNumbers={handleNumbers}
                    currentNumber={result}
                    newNumber={1}
                />
            </div>
            <div>
                <ButtonNumber
                    handleNumbers={handleNumbers}
                    currentNumber={result}
                    newNumber={2}
                />
            </div>
            <div>
                <ButtonNumber
                    handleNumbers={handleNumbers}
                    currentNumber={result}
                    newNumber={3}
                />
            </div>
            <div>+</div>
            <div>
                <ButtonNumber
                    handleNumbers={handleNumbers}
                    currentNumber={result}
                    newNumber={0}
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
