import { useState } from "react";
import { useDispatch } from "react-redux";
import { setArray } from "./slices/arraySlice";

export default function Array() {
    const dispatch = useDispatch();

    const [array, setArr] = useState([]);
    const [increment, setIncrement] = useState(0);

    const handleAdd = () => {
        setArr([...array, increment]);
        setIncrement((prev) => prev + 1); // Safely increment using the previous state
    };

    const handleAddToMain = () => {
        dispatch(setArray(array)); 
        setArr([]); 
    };

    return (
        <div>
            <h1>Array</h1>
            <button onClick={handleAdd}>Add</button>
            <br />
            <button onClick={handleAddToMain}>Add on Main</button>
            <div>
                <h1>Array Value: [{array.join(", ")}]</h1>
            </div>
        </div>
    );
}
