import { useState } from "react"

export default function States(){
    //var clr='blue'
    //var [clr,setClr]= useState('blue')
    //var [name,setName]= useState('Vishnu')
    var[data,setData]=useState({
        rollno:53,
        name:'Vishnu',
        gender:'F'
        })
    
    const updateRoll=()=>{
        setData({...data,
            rollno:107
        })
    }
    const updareGender=()=>{
        setData({...data,
            gender:'M'
        })
    }

    const[arr,setArr]=useState([1,2,3,4])

    const updateArrayBy10 = () => {
        setArr(arr.map((d) => d + 10)); 
    };
    
    return( 
        <>
        <h1>my name is {data.name} <br></br>my roll no is {data.rollno} rollno<br></br>My gender is {data.gender}</h1>
        <button onClick={()=>{setData({
            rollno:103,
            name:'Jagath'
        }
        )
        } }>click Me!! </button>

        <button onClick={updateRoll}>Update roll no</button>  
        <button onClick={updareGender}>Update gender</button>
        <h2> Array numbers are {arr.join(',')} </h2>
        <button onClick={updateArrayBy10}>Update array by 10</button>
        </>
        
    )
}