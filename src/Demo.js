import {useEffect, useState, useReducer} from 'react'

export default function Demo(){
    const TransactionReducer=(balance,action)=>{
        console.log(balance,'......',action.payload,'......',action.type)
        switch(action.type){
            case 'Withdraw':
                return balance-action.payload
            case 'Deposit':
                return balance+action.payload
        }
    }

    const Withdraw=(amount)=>{
        dispatch({type:'Withdraw',payload:amount})
    }
    const Deposit=(amount)=>{
        dispatch({type:'Deposit', payload:amount})
    }
    const[balance,dispatch]=useReducer(TransactionReducer,1000)
    return(
        <>
        <h1>Your balance is {balance} </h1>
        <button onClick={()=>{Withdraw(500)}}>Withdraw</button>
        <button onClick={()=>{Deposit(1000)}}>Deposit</button>
        </>
    )

}