import { InterfanceButtonPercentage } from "../interfaces/interfaces";

const ButtonPercentage: React.FC<InterfanceButtonPercentage> = ({
    result,
    handlePercentage,
}) => {
    return <button onClick={() => handlePercentage(result)}>%</button>;
};

export default ButtonPercentage;
