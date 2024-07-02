export interface InterfaceButtonNumber {
    handleInput: (
        int: number,
        currentInput: number,
        decimalBoolean: boolean,
        decimalMagnitude: number,
        inputCount: number
    ) => void;
    int: number;
    currentInput: number;
    decimalBoolean: boolean;
    decimalMagnitude: number;
    inputCount: number;
}

export interface InterfaceButtonClear {
    allClear: boolean;
    handleClear: Function;
}

export interface InterfaceButtonPositiveNegative {
    input: number;
    handlePositiveNegative: (input: number) => void;
}

export interface InterfanceButtonPercentage {
    input: number;
    handlePercentage: (input: number) => void;
}

export interface InterfaceButtonDecimal {
    decimalBoolean: boolean;
    handleDecimalBoolean: () => void;
}

export interface InterfaceResult {
    input: number;
    output: number;
    inputMode: boolean;
    inputCount: number;
}

export interface InterfaceButtonOperation {
    operationNew: string;
    operationsObj: InterfaceOperationsObject;
    handleOperation: (operationNew: string) => void;
}

export interface InterfaceOperationsObject {
    [key: string]: any;
}
