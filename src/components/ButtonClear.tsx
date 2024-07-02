import { InterfaceButtonClear } from "../interfaces/interfaces";

const ButtonClear: React.FC<InterfaceButtonClear> = ({
    allClear,
    handleClear,
}) => {
    if (allClear) {
        return (
            <button
                className="button operations-other"
                onClick={() => handleClear()}
            >
                AC
            </button>
        );
    } else if (!allClear) {
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
