import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fruits:[],
}

export const fruitsSlice = createSlice({
    name:'fruitSlice',
    initialState,
    reducers:{
        setFruit:(state,action)=>{
            state.fruits=[...state.fruits,action.payload]
        },
        deleteFruit:(state,action)=>{
            state.fruits=state.fruits.filter((fruit,index)=>index!==action.payload)
        },
        updateFruit:(state,action)=>{
            const{index,fruitname}=action.payload
            if(state.fruits[index]){
                state.fruits[index].fruitname=fruitname
            }
        }
    }
})

export const {setFruit,deleteFruit,updateFruit}=fruitsSlice.actions
export default fruitsSlice.reducer
