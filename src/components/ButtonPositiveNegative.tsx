import { InterfaceButtonPositiveNegative } from "../interfaces/interfaces";

const ButtonPositiveNegative: React.FC<InterfaceButtonPositiveNegative> = ({
    result,
    handlePositiveNegative,
}) => {
    return <button onClick={() => handlePositiveNegative(result)}>+/-</button>;
};

export default ButtonPositiveNegative;
