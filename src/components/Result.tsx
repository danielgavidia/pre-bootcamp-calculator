import { InterfaceResult } from "../interfaces/interfaces";

const Result: React.FC<InterfaceResult> = ({
    input,
    output,
    inputMode,
    inputCount,
    decimalBoolean,
    decimalMagnitude,
}) => {
    if (inputMode) {
        if (inputCount === 0 && decimalBoolean === false) {
            return <div className="result">{input}</div>;
        } else if (inputCount !== 0 && decimalBoolean === false) {
            const inputFormatted = input.toPrecision(inputCount);
            return <div className="result">{inputFormatted}</div>;
        } else if (
            inputCount !== 0 &&
            decimalBoolean === true &&
            decimalMagnitude === 0.1
        ) {
            const inputFormatted = input.toPrecision(inputCount);
            return <div className="result">{inputFormatted}.</div>;
        } else if (
            inputCount !== 0 &&
            decimalBoolean === true &&
            decimalMagnitude !== 0.1
        ) {
            const inputFormatted = input.toPrecision(inputCount);
            return <div className="result">{inputFormatted}</div>;
        } else {
            return <div className="result">{input}</div>;
        }
    } else if (!inputMode) {
        return <div className="result">{output}</div>;
    }
};

export default Result;
