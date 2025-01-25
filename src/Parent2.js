import {useState,useContext,createContext} from "react"
const userContext=createContext()
export default function Parent2(){
    const[user,setUser]=useState('Hello')
    return(
        <>
        <userContext.Provider value={{user,setUser}}>
        <h1>Welcome useContext in parent</h1>
        <Child1/>
        </userContext.Provider>
        </>
    )
}

function Child1(){
    return(
        <>
        <h1>Child1</h1>
        <Child2/>
        </>
    )
}

function Child2(){
    return(
        <>
        <h1>Child2</h1>
        <Child3/>
        </>
    )
}

function Child3(){
    return(
        <>
        <h1>Child3</h1>
        <Child4/>
        </>
    )
}

function Child4(){
    return(
        <>
        <h1>Child4</h1>
        <Child5/>
        </>
    )
}

function Child5(){
    const {user,setUser} = useContext(userContext)
    return(
        <>
        <h1>Child5</h1>
        <h2>The data is {user}</h2>
        <button onClick={()=>{
            setUser('bYE')
        }}>Click me</button>
        </>
    )
}

