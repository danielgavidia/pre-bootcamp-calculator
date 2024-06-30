import { InterfaceButtonClear } from "../interfaces/interfaces";

const ButtonClear: React.FC<InterfaceButtonClear> = ({
    result,
    handleClear,
}) => {
    if (result === 0) {
        return (
            <button
                className="button operations-other"
                onClick={() => handleClear()}
            >
                AC
            </button>
        );
    } else if (result !== 0) {
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
