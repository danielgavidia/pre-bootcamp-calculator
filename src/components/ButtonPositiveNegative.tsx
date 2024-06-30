import { InterfaceButtonPositiveNegative } from "../interfaces/interfaces";

const ButtonPositiveNegative: React.FC<InterfaceButtonPositiveNegative> = ({
    result,
    handlePositiveNegative,
}) => {
    return (
        <button
            className="button operations-other"
            onClick={() => handlePositiveNegative(result)}
        >
            +/-
        </button>
    );
};

export default ButtonPositiveNegative;
