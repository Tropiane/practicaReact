import { useState } from "react";
import { getGiftByQuery } from "../actions/get-gift-by-query.actions";
import type { Gif } from "../interfaces/gift.interface";

export const useGifts = ()=>{
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

    return {
        previousTerms,
        getGifts,

        handleSearch,
        handleTermClick
    }
}