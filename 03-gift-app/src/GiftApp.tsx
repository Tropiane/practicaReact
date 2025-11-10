import { CustomHeader } from "./components/CustomHeader";
import { SearchBar } from "./components/SearchBar";
import { GiftList } from "./gifts/components/GiftList";
import { PreviousSearches } from "./gifts/components/PreviousSearches";

import { useGifts } from "./gifts/hooks/useGifts";

export function GiftApp() {
    const {previousTerms, getGifts, handleSearch, handleTermClick} = useGifts()

    return (
        <>
            {/*header */}
            <CustomHeader title="Buscador de Gifts" description="Encontra el gift perfecto"/>

            {/*Search */}
            <SearchBar placeholder="Buscar Gift" onQuery={handleSearch}/>

            {/*Busquedas previas */}

            <PreviousSearches searches={previousTerms} handleFunction={handleTermClick}/>

            {/*Gifts */}
            <GiftList gifts={getGifts}/>
        </>
    )
}