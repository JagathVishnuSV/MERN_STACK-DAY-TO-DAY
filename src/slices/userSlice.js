import { createSlice } from '@reduxjs/toolkit';

const initialState={
    eusers:[]
}

export const userSlice = createSlice({
    name:'mySlice',
    initialState,
    reducers:{
        setUsers:(state,action)=>{
            state.eusers=[...state.eusers,action.payload]
        },
        deleteUser:(state,action)=>{
            state.eusers=state.eusers.filter((user,index)=>index!==action.payload)
        }
    }
})
export const {setUsers,deleteUser}=userSlice.actions
export default userSlice.reducer

