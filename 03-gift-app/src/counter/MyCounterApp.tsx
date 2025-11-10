import { useCounter } from "./useCounter"


export const MyCounterApp = ()=>{
    const {counter, handleAdd, handleReset, handleSubtract} = useCounter(15);
    
    return(
        <>
            <h1>Contador {counter}</h1>

            <div style={{display:"flex", flexDirection:"row", gap:"1rem", justifyContent:"center"}}>
                <button onClick={handleAdd}>+1</button>
                <button onClick={handleSubtract}>-1</button>
                <button onClick={handleReset}>reset</button>
            </div>
        </>
    )
}