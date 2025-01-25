import { useState } from "react";
import C1 from './C1'
export default function Parent(){
    const [data,setData]=useState('hello from parent')
    return(
        <>
        <h1>Parent</h1>
        </>
    )
}