
export function GiftApp() {
    return (
        <>
        {/*header */}
            <div>
            <h1>GiftApp</h1>
            <p>Busca el gift perfecto</p>
            </div>

            {/*Search */}
            <div className="searchContainer">
                <input type="text"  placeholder="Buscar Gift"/>
            </div>

            {/*Busquedas previas */}

            <div className="previousSearches">
                <h2>Busquedas previas</h2>
                <ul className="previousSearchesList">
                    <li>Goku</li>
                    <li>Naruto</li>
                </ul>
            </div>

            {/*Gifts */}
            <div className="giftsContainer">
                <p>aca van los gifts</p>
            </div>
        </>
    )
}