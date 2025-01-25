import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../slices/userSlice';
import fruitReducer from '../slices/fruitsSlice';
import arrayReducer from '../slices/arraySlice';
const Store = configureStore({
    reducer: {
        userInfo: userReducer,
        fruitInfo:fruitReducer,
        arrayInfo: arrayReducer
    }
});


export default Store;
