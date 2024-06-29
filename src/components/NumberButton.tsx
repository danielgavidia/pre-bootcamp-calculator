import { InterfaceNumberButton } from "../interfaces/interfaces";

const NumberButton: React.FC<InterfaceNumberButton> = ({
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
