import { useState } from "react";

import type { Gif } from "./gifts/interfaces/gift.interface";

import { CustomHeader } from "./components/CustomHeader";
import { SearchBar } from "./components/SearchBar";
import { GiftList } from "./gifts/components/GiftList";
import { PreviousSearches } from "./gifts/components/PreviousSearches";

import { getGiftByQuery } from "./gifts/actions/get-gift-by-query.actions";

export function GiftApp() {
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);
    const [getGifts, setGetGifts] = useState<Gif[]>([]);

    const handleSearch = async (query: string = '')=>{
        query = query.trim().toLowerCase()
        
        if (query.length === 0) return;

        if(previousTerms.includes(query)) return;
        
        setPreviousTerms( [query, ...previousTerms].splice(0, 7))

        const gifts = await getGiftByQuery(query)
        console.log(gifts);
        setGetGifts(gifts)
        
    }

    const handleTermClick = (term:string)=>{
        console.log(term);
    }

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