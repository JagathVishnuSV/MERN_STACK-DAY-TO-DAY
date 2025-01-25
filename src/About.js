import { useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { setFruit,updateFruit } from "./slices/fruitsSlice";

export default function About(){
    const [updateIndex,setUpdateIndex]=useState("")
    const dispatch = useDispatch()
    const fruits = useSelector((state) => state.fruitInfo.fruits)
    const[fruitname,setFruitName]=useState("")
    function addFruit(fruitData){
        fruitData.preventDefault()
        dispatch(setFruit({fruitname}))
    }
    function updateFruit(fruitData){
        
        if(updateIndex!==null){
            dispatch(updateFruit({index:updateIndex,fruitname}))
            setFruitName("")
            setUpdateIndex(null)
        }
    }
    function handleInputChange(event) {
        setFruitName(event.target.value);
      }
    return(
        <>
        <h1>About page, hi</h1>
        <input type='text' name = 'fruitname'  onChange={updateFruit} ></input>
        <button onClick={addFruit}>Add Fruit</button>
        <button onClick={updateFruit} disabled={updateIndex===null}>Update fruit</button>
        <h2>Fruits List</h2>
        {fruits.map((fruit, index) => (
        <div key={index}>
          <p>{fruit.fruitName}</p>
          <button onClick={() => setUpdateIndex(index)}>
            Edit
          </button>
        </div>
      ))}
        </>
    )
}