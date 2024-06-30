import { InterfaceButtonNumber } from "../interfaces/interfaces";

const NumberButton: React.FC<InterfaceButtonNumber> = ({
    handleNumbers,
    currentNumber,
    newNumber,
}) => {
    return (
        <div>
            <button onClick={() => handleNumbers(currentNumber, newNumber)}>
                {newNumber}
            </button>
        </div>
    );
};

export default NumberButton;
