export interface InterfaceButtonNumber {
    handleNumbers: (
        currentNumber: number,
        newNumber: number,
        decimalBoolean: boolean,
        decimalMagnitude: number
    ) => void;
    currentNumber: number;
    newNumber: number;
    decimalBoolean: boolean;
    decimalMagnitude: number;
}

export interface InterfaceButtonClear {
    result: number;
    handleClear: Function;
}

export interface InterfaceButtonPositiveNegative {
    result: number;
    handlePositiveNegative: (result: number) => void;
}

export interface InterfanceButtonPercentage {
    result: number;
    handlePercentage: (result: number) => void;
}

export interface InterfaceButtonDecimal {
    decimalBoolean: boolean;
    handleDecimalBoolean: () => void;
}

export interface InterfaceResult {
    result: number;
    inputCount: number;
}
