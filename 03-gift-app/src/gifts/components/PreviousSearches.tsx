import type { FC } from "react"

interface Props{
    searches: string[],
    handleFunction: (term:string)=>void
}
export const PreviousSearches: FC<Props> =({searches, handleFunction})=>{
    return(
        <div className="previousSearches">
            <h2>Busquedas previas</h2>
            <ul className="previousSearchesList">
                {searches.map(term =>(
                    <li key={term} onClick={()=>handleFunction(term)}>{term}</li>
                ))}
            </ul>
        </div>
    )
}