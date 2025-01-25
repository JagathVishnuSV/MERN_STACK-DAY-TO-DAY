import { useState } from "react";

export default function C5({data}){
    const updated = `${data}, Im child five`
    return(
        <>
        <h1>Child 5</h1>
        <p>{updated}</p>
        </>
    )
}