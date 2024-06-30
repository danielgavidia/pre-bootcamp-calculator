import { InterfaceButtonDecimal } from "../interfaces/interfaces";

const ButtonDecimal: React.FC<InterfaceButtonDecimal> = ({
    decimalBoolean,
    handleDecimalBoolean,
}) => {
    if (decimalBoolean) {
        return <button>.</button>;
    } else if (!decimalBoolean) {
        return <button onClick={() => handleDecimalBoolean()}>.</button>;
    }
};

export default ButtonDecimal;
