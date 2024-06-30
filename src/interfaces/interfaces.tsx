export interface InterfaceButtonNumber {
    handleNumbers: (currentNumber: number, newNumber: number) => void;
    currentNumber: number;
    newNumber: number;
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
