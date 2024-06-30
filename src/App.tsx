import { useState } from "react";
import { HandleNumbers } from "./interfaces/interfaces";
import ButtonNumber from "./components/ButtonNumber";
import ButtonClear from "./components/ButtonClear";

const App = () => {
    const [result, setResult] = useState(0);

    const handleNumbers: HandleNumbers = (
        currentNumber,
        newNumber
    ): boolean => {
        const currentNumberTimesTen: number = currentNumber * 10;
        const finalNumber: number = currentNumberTimesTen + newNumber;
        setResult(finalNumber);
        return true;
    };

    const handleClear = (): boolean => {
        setResult(0);
        return true;
    };

    return (
        <div>
            <div>{result}</div>
            <div>
                <ButtonClear result={result} handleClear={handleClear} />
            </div>
            <div>+/-</div>
            <div>%</div>
            <div>÷</div>
            <div>
                <ButtonNumber
                    handleNumbers={handleNumbers}
                    currentNumber={result}
                    newNumber={7}
                />
            </div>
            <div>
                <ButtonNumber
                    handleNumbers={handleNumbers}
                    currentNumber={result}
                    newNumber={8}
                />
            </div>
            <div>
                <ButtonNumber
                    handleNumbers={handleNumbers}
                    currentNumber={result}
                    newNumber={9}
                />
            </div>
            <div>x</div>
            <div>
                <ButtonNumber
                    handleNumbers={handleNumbers}
                    currentNumber={result}
                    newNumber={4}
                />
            </div>
            <div>
                <ButtonNumber
                    handleNumbers={handleNumbers}
                    currentNumber={result}
                    newNumber={5}
                />
            </div>
            <div>
                <ButtonNumber
                    handleNumbers={handleNumbers}
                    currentNumber={result}
                    newNumber={6}
                />
            </div>
            <div>-</div>
            <div>
                <ButtonNumber
                    handleNumbers={handleNumbers}
                    currentNumber={result}
                    newNumber={1}
                />
            </div>
            <div>
                <ButtonNumber
                    handleNumbers={handleNumbers}
                    currentNumber={result}
                    newNumber={2}
                />
            </div>
            <div>
                <ButtonNumber
                    handleNumbers={handleNumbers}
                    currentNumber={result}
                    newNumber={3}
                />
            </div>
            <div>+</div>
            <div>
                <ButtonNumber
                    handleNumbers={handleNumbers}
                    currentNumber={result}
                    newNumber={0}
                />
            </div>
            <div>.</div>
            <div>=</div>
        </div>
    );
};

export default App;
