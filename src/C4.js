import { useState } from "react";
import C5 from "./C5"

export default function C4({data}){
    const updated = `${data}, Im child four`
    return(
        <>
        <h1>Child 4</h1>
        <C5 data={updated}/>
        </>
    )
}