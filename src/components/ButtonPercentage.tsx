import { InterfanceButtonPercentage } from "../interfaces/interfaces";

const ButtonPercentage: React.FC<InterfanceButtonPercentage> = ({
    input,
    handlePercentage,
}) => {
    return (
        <button
            className="button operations-other"
            onClick={() => handlePercentage(input)}
        >
            %
        </button>
    );
};

export default ButtonPercentage;
