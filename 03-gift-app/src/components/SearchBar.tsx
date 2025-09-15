
export function SearchBar({placeholder}: {placeholder?:string}){
    return(
        <div className="searchContainer">
            <input type="text"  placeholder={placeholder}/>
            <button>Buscar</button>
        </div>
    )
}