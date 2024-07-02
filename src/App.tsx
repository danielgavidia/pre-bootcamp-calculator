import { useState } from "react";
import ButtonNumber from "./components/ButtonNumber";
import ButtonClear from "./components/ButtonClear";
import ButtonPositiveNegative from "./components/ButtonPositiveNegative";
import ButtonPercentage from "./components/ButtonPercentage";
import ButtonDecimal from "./components/ButtonDecimal";
import Result from "./components/Result";
import ButtonOperation from "./components/ButtonOperation";
import "./App.css";
import { InterfaceOperationsObject } from "./interfaces/interfaces";

const App = () => {
    const [input, setInput] = useState(0);
    const [output, setOutput] = useState(1);
    const [outputPrior, setOutputPrior] = useState(1);
    const [operation, setOperation] = useState("multiply");
    const [operationPrior, setOperationPrior] = useState("multiply");
    const [inputMode, setInputMode] = useState(true);
    const [decimalBoolean, setDecimalBoolean] = useState(false);
    const [decimalMagnitude, setDecimalMagnitude] = useState(0.1);
    const [inputCount, setInputCount] = useState(0);
    const [allClear, setAllClear] = useState(true);

    console.log(`input: ${input}`);
    console.log(`output: ${output}`);
    console.log(`outputPrior: ${outputPrior}`);
    console.log(`operation: ${operation}`);
    console.log(`operationPrior: ${operationPrior}`);
    console.log(`inputMode: ${inputMode}`);
    console.log(`decimalBoolean: ${decimalBoolean}`);
    console.log(`decimalMagnitude: ${decimalMagnitude}`);
    console.log(`inputCount: ${inputCount}`);
    console.log(`allClear: ${allClear}`);

    const handleInput = (
        int: number,
        currentInput: number,
        decimalBoolean: boolean,
        decimalMagnitude: number,
        inputCount: number
    ): void => {
        setAllClear(false);
        if (!decimalBoolean) {
            const newInput: number = int + currentInput * 10;
            setInput(newInput);
            setInputMode(true);
            setOutputPrior(output);
            setOperationPrior(operation);
            setInputCount(inputCount + 1);
        } else if (decimalBoolean) {
            const newInputDecimal: number = int * decimalMagnitude;
            const newInput: number = currentInput + newInputDecimal;
            const newDecimalMagnitude: number = decimalMagnitude * 0.1;
            setInput(newInput);
            setInputMode(true);
            setOutputPrior(output);
            setOperationPrior(operation);
            setDecimalMagnitude(newDecimalMagnitude);
            setInputCount(inputCount + 1);
        }
    };

    const handleClear = (): void => {
        setInput(0);
        setOutput(1);
        setOutputPrior(1);
        setOperation("multiply");
        setOperationPrior("multiply");
        setInputMode(true);
        setInputCount(0);
        setDecimalBoolean(false);
        setDecimalMagnitude(0.1);
        setAllClear(true);
    };

    const handlePositiveNegative = (currentInput: number): void => {
        setAllClear(false);
        const newInput: number = currentInput * -1;
        setInput(newInput);
    };

    const handlePercentage = (currentInput: number): void => {
        setAllClear(false);
        const newInput: number = currentInput * 0.01;
        setInput(newInput);
    };

    const handleDecimalBoolean = (): void => {
        setAllClear(false);
        const newDecimalBoolean: boolean = !decimalBoolean;
        setDecimalBoolean(newDecimalBoolean);
    };

    const handleOperation = (operationNew: string): void => {
        setAllClear(false);
        if (inputMode) {
            if (operationPrior === "add") {
                const newOutput = outputPrior + input;
                setOutput(newOutput);
            } else if (operationPrior === "subtract") {
                const newOutput = outputPrior - input;
                setOutput(newOutput);
            } else if (operationPrior === "multiply") {
                const newOutput = outputPrior * input;
                setOutput(newOutput);
            } else if (operationPrior === "divide") {
                const newOutput = outputPrior / input;
                setOutput(newOutput);
            } else if (operationPrior === "equals") {
                setOutput(outputPrior);
            }
            setOperation(operationNew);
            setInputMode(false);
            setInput(0);
            setInputCount(0);
        } else if (!inputMode) {
            setOperation(operationNew);
            setInputMode(false);
            setInput(0);
            setInputCount(0);
        }
    };

    const operationsObj: InterfaceOperationsObject = {
        add: {
            name: "add",
            operand: "+",
        },
        subtract: {
            name: "subtract",
            operand: "-",
        },
        multiply: {
            name: "multiply",
            operand: "x",
        },
        divide: {
            name: "divide",
            operand: "/",
        },
        equals: {
            name: "equals",
            operand: "=",
        },
    };

    return (
        <div className="container">
            <div className="box full-width">
                <Result
                    input={input}
                    output={output}
                    inputMode={inputMode}
                    inputCount={inputCount}
                    decimalBoolean={decimalBoolean}
                    decimalMagnitude={decimalMagnitude}
                />
            </div>
            <div className="box">
                <ButtonClear allClear={allClear} handleClear={handleClear} />
            </div>
            <div className="box">
                <ButtonPositiveNegative
                    input={input}
                    handlePositiveNegative={handlePositiveNegative}
                />
            </div>
            <div className="box">
                <ButtonPercentage
                    input={input}
                    handlePercentage={handlePercentage}
                />
            </div>
            <div className="box">
                <ButtonOperation
                    operationNew="subtract"
                    operationsObj={operationsObj}
                    handleOperation={handleOperation}
                />
            </div>
            <div className="box">
                <ButtonNumber
                    handleInput={handleInput}
                    int={7}
                    currentInput={input}
                    decimalBoolean={decimalBoolean}
                    decimalMagnitude={decimalMagnitude}
                    inputCount={inputCount}
                />
            </div>
            <div className="box">
                <ButtonNumber
                    handleInput={handleInput}
                    int={8}
                    currentInput={input}
                    decimalBoolean={decimalBoolean}
                    decimalMagnitude={decimalMagnitude}
                    inputCount={inputCount}
                />
            </div>
            <div className="box">
                <ButtonNumber
                    handleInput={handleInput}
                    int={9}
                    currentInput={input}
                    decimalBoolean={decimalBoolean}
                    decimalMagnitude={decimalMagnitude}
                    inputCount={inputCount}
                />
            </div>
            <div className="box">
                <ButtonOperation
                    operationNew="multiply"
                    operationsObj={operationsObj}
                    handleOperation={handleOperation}
                />
            </div>
            <div className="box">
                <ButtonNumber
                    handleInput={handleInput}
                    int={4}
                    currentInput={input}
                    decimalBoolean={decimalBoolean}
                    decimalMagnitude={decimalMagnitude}
                    inputCount={inputCount}
                />
            </div>
            <div className="box">
                <ButtonNumber
                    handleInput={handleInput}
                    int={5}
                    currentInput={input}
                    decimalBoolean={decimalBoolean}
                    decimalMagnitude={decimalMagnitude}
                    inputCount={inputCount}
                />
            </div>
            <div className="box">
                <ButtonNumber
                    handleInput={handleInput}
                    int={6}
                    currentInput={input}
                    decimalBoolean={decimalBoolean}
                    decimalMagnitude={decimalMagnitude}
                    inputCount={inputCount}
                />
            </div>
            <div className="box">
                <ButtonOperation
                    operationNew="subtract"
                    operationsObj={operationsObj}
                    handleOperation={handleOperation}
                />
            </div>
            <div className="box">
                <ButtonNumber
                    handleInput={handleInput}
                    int={1}
                    currentInput={input}
                    decimalBoolean={decimalBoolean}
                    decimalMagnitude={decimalMagnitude}
                    inputCount={inputCount}
                />
            </div>
            <div className="box">
                <ButtonNumber
                    handleInput={handleInput}
                    int={2}
                    currentInput={input}
                    decimalBoolean={decimalBoolean}
                    decimalMagnitude={decimalMagnitude}
                    inputCount={inputCount}
                />
            </div>
            <div className="box">
                <ButtonNumber
                    handleInput={handleInput}
                    int={3}
                    currentInput={input}
                    decimalBoolean={decimalBoolean}
                    decimalMagnitude={decimalMagnitude}
                    inputCount={inputCount}
                />
            </div>
            <div className="box">
                <ButtonOperation
                    operationNew="add"
                    operationsObj={operationsObj}
                    handleOperation={handleOperation}
                />
            </div>
            <div className="box half-width">
                <ButtonNumber
                    handleInput={handleInput}
                    int={0}
                    currentInput={input}
                    decimalBoolean={decimalBoolean}
                    decimalMagnitude={decimalMagnitude}
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
                    operationNew="equals"
                    operationsObj={operationsObj}
                    handleOperation={handleOperation}
                />
            </div>
        </div>
    );
};

export default App;
