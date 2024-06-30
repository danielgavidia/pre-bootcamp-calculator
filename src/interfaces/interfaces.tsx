export interface HandleNumbers {
    (currentNumber: number, newNumber: number): boolean;
}

export interface NumberButton {
    handleNumbers: HandleNumbers;
    currentNumber: number;
    newNumber: number;
}
