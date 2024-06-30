import { InterfaceButtonNumber } from "../interfaces/interfaces";

const NumberButton: React.FC<InterfaceButtonNumber> = ({
    handleNumbers,
    currentNumber,
    newNumber,
    decimalBoolean,
    decimalMagnitude,
}) => {
    return (
        <div>
            <button
                onClick={() =>
                    handleNumbers(
                        currentNumber,
                        newNumber,
                        decimalBoolean,
                        decimalMagnitude
                    )
                }
            >
                {newNumber}
            </button>
        </div>
    );
};

export default NumberButton;
