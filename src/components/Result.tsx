import { InterfaceResult } from "../interfaces/interfaces";

const Result: React.FC<InterfaceResult> = ({ result, inputCount }) => {
    if (inputCount !== 0) {
        const resultFinal = result.toPrecision(inputCount);
        return <div className="result">{resultFinal}</div>;
    } else {
        return <div className="result">{result}</div>;
    }
};

export default Result;
