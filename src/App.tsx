import { useState } from "react";
import ButtonNumber from "./components/ButtonNumber";
import ButtonClear from "./components/ButtonClear";
import ButtonPositiveNegative from "./components/ButtonPositiveNegative";
import ButtonPercentage from "./components/ButtonPercentage";
import ButtonDecimal from "./components/ButtonDecimal";
import Result from "./components/Result";
import ButtonOperation from "./components/ButtonOperation";

const App = () => {
    const [result, setResult] = useState(0);
    const [resultMemory, setResultMemory] = useState<number | null>(null);
    const [decimalBoolean, setDecimalBoolean] = useState(false);
    const [decimalMagnitude, setDecimalMagnitude] = useState(0.1);
    const [inputCount, setInputCount] = useState(0);
    const [operation, setOperation] = useState("");

    console.log(`result: ${result}`);
    console.log(`resultMemory: ${resultMemory}`);
    console.log(`decimalBoolean: ${decimalBoolean}`);
    console.log(`decimalMagnitude: ${decimalMagnitude}`);
    console.log(`inputCount: ${inputCount}`);
    console.log(`operation: ${operation}`);

    const handleNumbers = (
        currentNumber: number,
        newNumber: number,
        decimalBoolean: boolean,
        decimalMagnitude: number,
        resultMemory: number | null,
        inputCount: number
    ): void => {
        if (resultMemory !== null && inputCount === 0) {
            setResult(newNumber);
            setInputCount(inputCount + 1);
        } else {
            if (!decimalBoolean) {
                const currentNumberTimesTen: number = currentNumber * 10;
                const finalNumber: number = currentNumberTimesTen + newNumber;
                setResult(finalNumber);
                setInputCount(inputCount + 1);
            } else if (decimalBoolean) {
                const newNumberDecimal: number = newNumber * decimalMagnitude;
                const finalNumber: number = currentNumber + newNumberDecimal;
                const newDecimalMagnitude: number = decimalMagnitude * 0.1;
                setResult(finalNumber);
                setDecimalMagnitude(newDecimalMagnitude);
                setInputCount(inputCount + 1);
            }
        }
    };

    const handleClear = (): void => {
        setResult(0);
        setResultMemory(null);
        setInputCount(0);
        setDecimalBoolean(false);
        setDecimalMagnitude(0.1);
        setOperation("");
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

    const handleOperation = (
        result: number,
        resultMemory: number | null,
        operation: string,
        newOperation: string
    ): void => {
        if (resultMemory === null) {
            setResultMemory(result);
            setOperation(newOperation);
            setInputCount(0);
        } else if (operation === "add") {
            const newResult: number = resultMemory + result;
            setResult(newResult);
            setResultMemory(newResult);
            setOperation(newOperation);
            setInputCount(0);
        } else if (operation === "subtract") {
            const newResult: number = resultMemory - result;
            setResult(newResult);
            setResultMemory(newResult);
            setOperation(newOperation);
            setInputCount(0);
        } else if (operation === "multiply") {
            const newResult: number = resultMemory * result;
            setResult(newResult);
            setResultMemory(newResult);
            setOperation(newOperation);
            setInputCount(0);
        } else if (operation === "divide") {
            const newResult: number = resultMemory / result;
            setResult(newResult);
            setResultMemory(newResult);
            setOperation(newOperation);
            setInputCount(0);
        }
    };

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
            <div>
                <ButtonOperation
                    result={result}
                    resultMemory={resultMemory}
                    operation={operation}
                    newOperation="divide"
                    handleOperation={handleOperation}
                />
            </div>
            <div>
                <ButtonNumber
                    handleNumbers={handleNumbers}
                    currentNumber={result}
                    newNumber={7}
                    decimalBoolean={decimalBoolean}
                    decimalMagnitude={decimalMagnitude}
                    resultMemory={resultMemory}
                    inputCount={inputCount}
                />
            </div>
            <div>
                <ButtonNumber
                    handleNumbers={handleNumbers}
                    currentNumber={result}
                    newNumber={8}
                    decimalBoolean={decimalBoolean}
                    decimalMagnitude={decimalMagnitude}
                    resultMemory={resultMemory}
                    inputCount={inputCount}
                />
            </div>
            <div>
                <ButtonNumber
                    handleNumbers={handleNumbers}
                    currentNumber={result}
                    newNumber={9}
                    decimalBoolean={decimalBoolean}
                    decimalMagnitude={decimalMagnitude}
                    resultMemory={resultMemory}
                    inputCount={inputCount}
                />
            </div>
            <div>
                <ButtonOperation
                    result={result}
                    resultMemory={resultMemory}
                    operation={operation}
                    newOperation="multiply"
                    handleOperation={handleOperation}
                />
            </div>
            <div>
                <ButtonNumber
                    handleNumbers={handleNumbers}
                    currentNumber={result}
                    newNumber={4}
                    decimalBoolean={decimalBoolean}
                    decimalMagnitude={decimalMagnitude}
                    resultMemory={resultMemory}
                    inputCount={inputCount}
                />
            </div>
            <div>
                <ButtonNumber
                    handleNumbers={handleNumbers}
                    currentNumber={result}
                    newNumber={5}
                    decimalBoolean={decimalBoolean}
                    decimalMagnitude={decimalMagnitude}
                    resultMemory={resultMemory}
                    inputCount={inputCount}
                />
            </div>
            <div>
                <ButtonNumber
                    handleNumbers={handleNumbers}
                    currentNumber={result}
                    newNumber={6}
                    decimalBoolean={decimalBoolean}
                    decimalMagnitude={decimalMagnitude}
                    resultMemory={resultMemory}
                    inputCount={inputCount}
                />
            </div>
            <div>
                <ButtonOperation
                    result={result}
                    resultMemory={resultMemory}
                    operation={operation}
                    newOperation="subtract"
                    handleOperation={handleOperation}
                />
            </div>
            <div>
                <ButtonNumber
                    handleNumbers={handleNumbers}
                    currentNumber={result}
                    newNumber={1}
                    decimalBoolean={decimalBoolean}
                    decimalMagnitude={decimalMagnitude}
                    resultMemory={resultMemory}
                    inputCount={inputCount}
                />
            </div>
            <div>
                <ButtonNumber
                    handleNumbers={handleNumbers}
                    currentNumber={result}
                    newNumber={2}
                    decimalBoolean={decimalBoolean}
                    decimalMagnitude={decimalMagnitude}
                    resultMemory={resultMemory}
                    inputCount={inputCount}
                />
            </div>
            <div>
                <ButtonNumber
                    handleNumbers={handleNumbers}
                    currentNumber={result}
                    newNumber={3}
                    decimalBoolean={decimalBoolean}
                    decimalMagnitude={decimalMagnitude}
                    resultMemory={resultMemory}
                    inputCount={inputCount}
                />
            </div>
            <div>
                <ButtonOperation
                    result={result}
                    resultMemory={resultMemory}
                    operation={operation}
                    newOperation="add"
                    handleOperation={handleOperation}
                />
            </div>
            <div>
                <ButtonNumber
                    handleNumbers={handleNumbers}
                    currentNumber={result}
                    newNumber={0}
                    decimalBoolean={decimalBoolean}
                    decimalMagnitude={decimalMagnitude}
                    resultMemory={resultMemory}
                    inputCount={inputCount}
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
