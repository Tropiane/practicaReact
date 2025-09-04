import { useState } from "react"

import './itemCounter.css'

interface Props{
    name: string,
    quantity: number
}
export const ItemCounter = ({name, quantity}: Props)=>{
    const [count, setCount] = useState(0);

    const handleAdd = ()=>{
        setCount(count + 1)
    };
    const handleSubtract = ()=>{
        setCount(count - 1)
    }
    return(
        <>
        <section key={name} className="itemCounter">
            <p>{name}</p>
            <button onClick={handleAdd}>+1</button>
            <span 
            style={{color: count >= 1 ? 'red' : 'black'}}>{count + quantity}</span>
            <button onClick={handleSubtract}>-1</button>
        </section>
        </>
    )
}