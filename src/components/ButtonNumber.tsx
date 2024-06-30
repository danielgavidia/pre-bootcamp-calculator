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
        <div>
            <button
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
        </div>
    );
};

export default NumberButton;
