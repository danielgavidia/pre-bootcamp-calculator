import { InterfaceResult } from "../interfaces/interfaces";

const Result: React.FC<InterfaceResult> = ({
    result,
    inputCount,
    decimalBoolean,
    decimalMagnitude,
}) => {
    switch (true) {
        case inputCount === 0 && decimalBoolean === false:
            return <div className="result">{result}</div>;
        case inputCount !== 0 && decimalBoolean === false:
            const resultCase1 = result.toPrecision(inputCount);
            return <div className="result">{resultCase1}</div>;
        case inputCount !== 0 &&
            decimalBoolean === true &&
            decimalMagnitude === 0.1:
            const resultCase2 = result.toPrecision(inputCount);
            return <div className="result">{resultCase2}.</div>;
        case inputCount !== 0 &&
            decimalBoolean === true &&
            decimalMagnitude !== 0.1:
            const resultCase3 = result.toPrecision(inputCount);
            return <div className="result">{resultCase3}</div>;
        default:
            return <div className="result">{result}</div>;
    }
};

export default Result;
