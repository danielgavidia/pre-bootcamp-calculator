import { InterfaceButtonPositiveNegative } from "../interfaces/interfaces";

const ButtonPositiveNegative: React.FC<InterfaceButtonPositiveNegative> = ({
    input,
    handlePositiveNegative,
}) => {
    return (
        <button
            className="button operations-other"
            onClick={() => handlePositiveNegative(input)}
        >
            +/-
        </button>
    );
};

export default ButtonPositiveNegative;
