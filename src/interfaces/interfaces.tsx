export interface InterfaceButtonNumber {
    handleNumbers: (currentNumber: number, newNumber: number) => boolean;
    currentNumber: number;
    newNumber: number;
}

export interface InterfaceButtonClear {
    result: number;
    handleClear: Function;
}

export interface InterfaceButtonPositiveNegative {
    result: number;
    handlePositiveNegative: (result: number) => boolean;
}
