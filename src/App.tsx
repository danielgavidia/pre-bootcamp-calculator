import { useState } from "react";
import ButtonNumber from "./components/ButtonNumber";
import ButtonClear from "./components/ButtonClear";
import ButtonPositiveNegative from "./components/ButtonPositiveNegative";
import ButtonPercentage from "./components/ButtonPercentage";
import ButtonDecimal from "./components/ButtonDecimal";
import Result from "./components/Result";
import ButtonOperation from "./components/ButtonOperation";
import "./App.css";

const App = () => {
    const [input, setInput] = useState(0);
    const [ouput, setOutput] = useState(1);
    const [outputPrior, setOutputPrior] = useState(1);
    const [operation, setOperation] = useState("multiply");
    const [operationPrior, setOperationPrior] = useState("multiply");
    const [inputMode, setInputMode] = useState(true);

    const [decimalBoolean, setDecimalBoolean] = useState(false);
    const [decimalMagnitude, setDecimalMagnitude] = useState(0.1);
    const [inputCount, setInputCount] = useState(0);

    console.log(`decimalBoolean: ${decimalBoolean}`);
    console.log(`decimalMagnitude: ${decimalMagnitude}`);
    console.log(`inputCount: ${inputCount}`);
    console.log(`operation: ${operation}`);

    const handleInput = (
        int: number,
        currentInput: number,
        decimalBoolean: boolean,
        decimalMagnitude: number,
        inputCount: number
    ): void => {
        if (resultMemory !== null && inputCount === 0) {
            setResult(int);
            setInputCount(inputCount + 1);
        } else {
            if (!decimalBoolean) {
                const newInput: number = int + currentInput * 10;
                setInput(newInput);
                setInputMode(true);
                setOutputPrior(output);
                setOperationPrior(operation);
                setInputCount(inputCount + 1);
            } else if (decimalBoolean) {
                const newNumberDecimal: number = int * decimalMagnitude;
                const finalNumber: number = currentInput + newNumberDecimal;
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
        } else if (operation === "equals") {
            const newResult: number = result;
            setResult(newResult);
            setResultMemory(newResult);
            setOperation(newOperation);
            setInputCount(0);
        }
    };

    return (
        <div className="container">
            <div className="box full-width">
                <Result
                    result={result}
                    inputCount={inputCount}
                    decimalBoolean={decimalBoolean}
                    decimalMagnitude={decimalMagnitude}
                />
            </div>
            <div className="box">
                <ButtonClear result={result} handleClear={handleClear} />
            </div>
            <div className="box">
                <ButtonPositiveNegative
                    result={result}
                    handlePositiveNegative={handlePositiveNegative}
                />
            </div>
            <div className="box">
                <ButtonPercentage
                    result={result}
                    handlePercentage={handlePercentage}
                />
            </div>
            <div className="box">
                <ButtonOperation
                    result={result}
                    resultMemory={resultMemory}
                    operation={operation}
                    newOperation="divide"
                    handleOperation={handleOperation}
                />
            </div>
            <div className="box">
                <ButtonNumber
                    handleNumbers={handleInput}
                    currentNumber={result}
                    newNumber={7}
                    decimalBoolean={decimalBoolean}
                    decimalMagnitude={decimalMagnitude}
                    resultMemory={resultMemory}
                    inputCount={inputCount}
                />
            </div>
            <div className="box">
                <ButtonNumber
                    handleNumbers={handleInput}
                    currentNumber={result}
                    newNumber={8}
                    decimalBoolean={decimalBoolean}
                    decimalMagnitude={decimalMagnitude}
                    resultMemory={resultMemory}
                    inputCount={inputCount}
                />
            </div>
            <div className="box">
                <ButtonNumber
                    handleNumbers={handleInput}
                    currentNumber={result}
                    newNumber={9}
                    decimalBoolean={decimalBoolean}
                    decimalMagnitude={decimalMagnitude}
                    resultMemory={resultMemory}
                    inputCount={inputCount}
                />
            </div>
            <div className="box">
                <ButtonOperation
                    result={result}
                    resultMemory={resultMemory}
                    operation={operation}
                    newOperation="multiply"
                    handleOperation={handleOperation}
                />
            </div>
            <div className="box">
                <ButtonNumber
                    handleNumbers={handleInput}
                    currentNumber={result}
                    newNumber={4}
                    decimalBoolean={decimalBoolean}
                    decimalMagnitude={decimalMagnitude}
                    resultMemory={resultMemory}
                    inputCount={inputCount}
                />
            </div>
            <div className="box">
                <ButtonNumber
                    handleNumbers={handleInput}
                    currentNumber={result}
                    newNumber={5}
                    decimalBoolean={decimalBoolean}
                    decimalMagnitude={decimalMagnitude}
                    resultMemory={resultMemory}
                    inputCount={inputCount}
                />
            </div>
            <div className="box">
                <ButtonNumber
                    handleNumbers={handleInput}
                    currentNumber={result}
                    newNumber={6}
                    decimalBoolean={decimalBoolean}
                    decimalMagnitude={decimalMagnitude}
                    resultMemory={resultMemory}
                    inputCount={inputCount}
                />
            </div>
            <div className="box">
                <ButtonOperation
                    result={result}
                    resultMemory={resultMemory}
                    operation={operation}
                    newOperation="subtract"
                    handleOperation={handleOperation}
                />
            </div>
            <div className="box">
                <ButtonNumber
                    handleNumbers={handleInput}
                    currentNumber={result}
                    newNumber={1}
                    decimalBoolean={decimalBoolean}
                    decimalMagnitude={decimalMagnitude}
                    resultMemory={resultMemory}
                    inputCount={inputCount}
                />
            </div>
            <div className="box">
                <ButtonNumber
                    handleNumbers={handleInput}
                    currentNumber={result}
                    newNumber={2}
                    decimalBoolean={decimalBoolean}
                    decimalMagnitude={decimalMagnitude}
                    resultMemory={resultMemory}
                    inputCount={inputCount}
                />
            </div>
            <div className="box">
                <ButtonNumber
                    handleNumbers={handleInput}
                    currentNumber={result}
                    newNumber={3}
                    decimalBoolean={decimalBoolean}
                    decimalMagnitude={decimalMagnitude}
                    resultMemory={resultMemory}
                    inputCount={inputCount}
                />
            </div>
            <div className="box">
                <ButtonOperation
                    result={result}
                    resultMemory={resultMemory}
                    operation={operation}
                    newOperation="add"
                    handleOperation={handleOperation}
                />
            </div>
            <div className="box half-width">
                <ButtonNumber
                    handleNumbers={handleInput}
                    currentNumber={result}
                    newNumber={0}
                    decimalBoolean={decimalBoolean}
                    decimalMagnitude={decimalMagnitude}
                    resultMemory={resultMemory}
                    inputCount={inputCount}
                />
            </div>
            <div className="box">
                <ButtonDecimal
                    decimalBoolean={decimalBoolean}
                    handleDecimalBoolean={handleDecimalBoolean}
                />
            </div>
            <div className="box">
                <ButtonOperation
                    result={result}
                    resultMemory={resultMemory}
                    operation={operation}
                    newOperation="equals"
                    handleOperation={handleOperation}
                />
            </div>
        </div>
    );
};

export default App;
