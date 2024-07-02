import { InterfaceButtonNumber } from "../interfaces/interfaces";

const NumberButton: React.FC<InterfaceButtonNumber> = ({
    handleInput,
    int,
    currentInput,
    decimalBoolean,
    decimalMagnitude,
    inputCount,
}) => {
    return (
        <button
            className="button numbers"
            onClick={() =>
                handleInput(
                    int,
                    currentInput,
                    decimalBoolean,
                    decimalMagnitude,
                    inputCount
                )
            }
        >
            {int}
        </button>
    );
};

export default NumberButton;
