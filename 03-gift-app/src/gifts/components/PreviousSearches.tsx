import type { FC } from "react"

interface Props{
    searches: string[]
}
export const PreviousSearches: FC<Props> =({searches})=>{
    return(
        <div className="previousSearches">
            <h2>Busquedas previas</h2>
            <ul className="previousSearchesList">
                {searches.map(term =>(
                    <li key={term}>{term}</li>
                ))}
            </ul>
        </div>
    )
}