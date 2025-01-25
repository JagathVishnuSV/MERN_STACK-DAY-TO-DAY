import {useDispatch, useSelector} from 'react-redux';
import { deleteFruit } from './slices/fruitsSlice';

export default function Fruit(){
    const fruits = useSelector((state)=>state.fruitInfo.fruits)
    const dispatch = useDispatch()
    const deleteFruitInfo=(index)=>{
        dispatch(deleteFruit(index))
    }
    return(
        <>
        <h1>Fruits</h1>
        {
            fruits.map((fruit,index)=>{
                return(
                    <div key={index}>
                        <h1>{fruit.fruitname}</h1>
                        <button onClick={()=>deleteFruitInfo(index)}>Delete Fruit</button>
                    </div>
                )
            })
        }
        </>
    )
}