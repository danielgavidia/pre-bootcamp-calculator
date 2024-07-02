import { InterfaceResult } from "../interfaces/interfaces";

const getFontSize = (number: number): object => {
    const startingFontSize = 50;
    const decayFactor = 0.09;
    const defaultMaxDigits = 10;
    if (number === 0) {
        return {
            fontSize: `${startingFontSize}px`,
        };
    } else {
        const str = number.toString();
        const digits = str.length;
        if (digits <= defaultMaxDigits) {
            return {
                fontSize: `${startingFontSize}px`,
            };
        } else if (digits > defaultMaxDigits) {
            const iterations = digits - defaultMaxDigits;
            const dynamicFontSize = Math.floor(
                startingFontSize * Math.pow(1 - decayFactor, iterations),
            );
            return {
                fontSize: `${dynamicFontSize}px`,
            };
        }
    }
    return {
        fontSize: `${startingFontSize}px`,
    };
};

const Result: React.FC<InterfaceResult> = ({
    input,
    output,
    inputMode,
    inputCount,
}) => {
    if (inputMode) {
        if (inputCount === 0) {
            return (
                <div className="result" style={getFontSize(input)}>
                    {input}
                </div>
            );
        } else {
            const inputFormatted =
                inputCount > 21
                    ? input.toString()
                    : input.toPrecision(inputCount);
            return (
                <div className="result" style={getFontSize(Number(input))}>
                    {inputFormatted}
                </div>
            );
        }
    } else if (!inputMode) {
        return (
            <div className="result" style={getFontSize(output)}>
                {output}
            </div>
        );
    }
};

export default Result;
