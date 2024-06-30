import { InterfaceButtonNumber } from "../interfaces/interfaces";

const NumberButton: React.FC<InterfaceButtonNumber> = ({
    handleNumbers,
    currentNumber,
    newNumber,
    decimalBoolean,
    decimalMagnitude,
    resultMemory,
    inputCount,
}) => {
    return (
        <button
            className="button numbers"
            onClick={() =>
                handleNumbers(
                    currentNumber,
                    newNumber,
                    decimalBoolean,
                    decimalMagnitude,
                    resultMemory,
                    inputCount
                )
            }
        >
            {newNumber}
        </button>
    );
};

export default NumberButton;
