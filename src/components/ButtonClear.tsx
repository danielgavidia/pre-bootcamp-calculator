import { InterfaceButtonClear } from "../interfaces/interfaces";

const ButtonClear: React.FC<InterfaceButtonClear> = ({
    input,
    handleClear,
}) => {
    if (input === 0) {
        return (
            <button
                className="button operations-other"
                onClick={() => handleClear()}
            >
                AC
            </button>
        );
    } else if (input !== 0) {
        return (
            <button
                className="button operations-other"
                onClick={() => handleClear()}
            >
                C
            </button>
        );
    }
};

export default ButtonClear;
