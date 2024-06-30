import { InterfaceButtonOperation } from "../interfaces/interfaces";

const ButtonOperation: React.FC<InterfaceButtonOperation> = ({
    result,
    resultMemory,
    operation,
    newOperation,
    handleOperation,
}) => {
    const operations = {
        add: "+",
        subtract: "-",
        multiply: "x",
        divide: "÷",
        equals: "=",
    };
    return (
        <button
            onClick={() =>
                handleOperation(result, resultMemory, operation, newOperation)
            }
        >
            {operations[newOperation as keyof typeof operations]}
        </button>
    );
};

export default ButtonOperation;
