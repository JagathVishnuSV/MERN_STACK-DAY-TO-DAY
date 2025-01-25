import { useEffect, useState } from "react"
export default function Test(){
    const[count1,setCount1]=useState(0)
    const[count2,setCount2]=useState(0)
    useEffect(()=>{
        console.log('rendering......')
        if(count1===10){setCount1(0)}
        if(count2===15){setCount2(0)}
    },[count1])
    return(
        <>
        <h1>the state val is {count1}</h1>
        <h1>the state val is {count2}</h1>
        <button onClick={()=>{
            setCount1(count1+1)
        }}>count1</button>

        <button onClick={()=>{setCount2(count2+1)}}>count2</button>
        </>


    )
}