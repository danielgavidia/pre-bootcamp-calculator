import { useState } from "react";

const App = () => {
    const [result, setResult] = useState(0);

    return (
        <div>
            <div>{result}</div>
            <div>AC</div>
            <div>+/-</div>
            <div>%</div>
            <div>÷</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>x</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>-</div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>+</div>
            <div>0</div>
            <div>.</div>
            <div>=</div>
        </div>
    );
};

export default App;
