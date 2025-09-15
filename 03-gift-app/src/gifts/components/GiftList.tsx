import type { FC } from "react";
import type { Gif } from "../../data/giftMock";
interface Props{
    gifts: Gif[]
}
export const GiftList:FC<Props> =({gifts})=>{
    return(
        <div className="gifsContainer">
            {
                gifts.map((gift)=>(
                    <div key={gift.id} className="gifCard">
                        <img src={gift.url} alt={gift.title}/>
                        <h3>{gift.title}</h3>
                        <p>{gift.width}x{gift.height}</p>
                    </div>
                ))
            }
        </div>
    )
}