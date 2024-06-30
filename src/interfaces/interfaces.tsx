export interface HandleNumbers {
    (currentNumber: number, newNumber: number): boolean;
}

export interface InterfaceButtonNumber {
    handleNumbers: HandleNumbers;
    currentNumber: number;
    newNumber: number;
}

export interface InterfaceButtonClear {
    result: number;
    handleClear: Function;
}
