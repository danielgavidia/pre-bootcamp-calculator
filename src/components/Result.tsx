import { InterfaceResult } from "../interfaces/interfaces";

const Result: React.FC<InterfaceResult> = ({ result, inputCount }) => {
    if (inputCount !== 0) {
        const resultFinal = result.toPrecision(inputCount);
        return <p>{resultFinal}</p>;
    } else {
        return <p>{result}</p>;
    }
};

export default Result;
