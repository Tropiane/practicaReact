import type { GiftResponse } from '../interfaces/gift.response'
import type { Gif } from '../interfaces/gift.interface'
import { giftApi } from '../api/gift.api'

export const getGiftByQuery = async (query: string): Promise<Gif[]> =>{
    const response = await giftApi<GiftResponse>('search', {
        params:{
            q: query,
            limit:10
        }
    })
    
    return response.data.data.map((gift)=>({
        id: gift.id,
        title: gift.title,
        url: gift.images.original.url,
        width: Number(gift.images.original.width),
        height: Number(gift.images.original.height)
    }))
}