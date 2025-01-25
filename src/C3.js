import { useState } from "react";
import C4 from "./C4"

export default function C3({data}){
    const updated = `${data}, Im child three`
    return(
        <>
        <h1>Child 3</h1>
        <C4 data={updated}/>
        </>
    )
}