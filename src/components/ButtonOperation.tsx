import { InterfaceButtonOperation } from "../interfaces/interfaces";

const ButtonOperation: React.FC<InterfaceButtonOperation> = ({
    operationNew,
    operationsObj,
    handleOperation,
}) => {
    return (
        <button
            className="button operations"
            onClick={() => handleOperation(operationNew)}
        >
            {operationsObj[operationNew]["operand"]}
        </button>
    );
};

export default ButtonOperation;
