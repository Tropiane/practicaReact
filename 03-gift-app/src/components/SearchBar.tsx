import { useEffect, useState, type KeyboardEvent } from "react"

interface Props {
    placeholder?:string,
    onQuery: (query:string)=> void
}
export function SearchBar({placeholder, onQuery}: Props){
    const [query, setQuery] = useState("");
    const [previousTerms, setPreviousTerms] = useState<string[]>([])

    useEffect(()=>{
        
        const timeOutId = setTimeout(()=>{
            onQuery(query)
        }, 700)
        
        return ()=>{
            clearTimeout(timeOutId)
        }
        
    }, [query, onQuery]);
    
    const handleSearch = (query: string = '')=>{
        query = query.trim().toLowerCase()
        
        if (query.length === 0) return;

        if(previousTerms.includes(query)) return;
        
        setPreviousTerms( [query, ...previousTerms].splice(0, 7))
    }
    
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>)=>{
        if(e.key === "Enter"){
            handleSearch()
        }
        
    }

    return(
        <div className="searchContainer">
            <input type="text" value={query} onChange={(e)=>{setQuery(e.target.value)
            }} onKeyDown={(e)=>{handleKeyDown(e)}} placeholder={placeholder}/>
            <button onClick={()=>handleSearch()}>Buscar</button>
        </div>
    )
}