import { InterfaceButtonOperation } from "../interfaces/interfaces";

const ButtonOperation: React.FC<InterfaceButtonOperation> = ({
    newOperation,
    handleOperation,
}) => {
    const operations = {
        add: "+",
        subtract: "-",
        multiply: "x",
        divide: "÷",
    };
    return (
        <button onClick={() => handleOperation(newOperation)}>
            {operations[newOperation as keyof typeof operations]}
        </button>
    );
};

export default ButtonOperation;
