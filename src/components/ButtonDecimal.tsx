import { InterfaceButtonDecimal } from "../interfaces/interfaces";

const ButtonDecimal: React.FC<InterfaceButtonDecimal> = ({
    decimalBoolean,
    handleDecimalBoolean,
}) => {
    if (decimalBoolean) {
        return <button className="button numbers">.</button>;
    } else if (!decimalBoolean) {
        return (
            <button
                className="button numbers"
                onClick={() => handleDecimalBoolean()}
            >
                .
            </button>
        );
    }
};

export default ButtonDecimal;
