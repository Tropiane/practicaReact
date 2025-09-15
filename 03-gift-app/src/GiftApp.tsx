import { CustomHeader } from "./components/CustomHeader"
import { SearchBar } from "./components/SearchBar"
import { mockGifs } from "./data/giftMock"
import { GiftList } from "./gifts/components/GiftList"
import { PreviousSearches } from "./gifts/components/PreviousSearches"
export function GiftApp() {
    return (
        <>
            {/*header */}
            <CustomHeader title="Buscador de Gifts" description="Encontra el gift perfecto"/>

            {/*Search */}
            <SearchBar placeholder="Buscar Gift"/>

            {/*Busquedas previas */}

            <PreviousSearches searches={["Goku", "Dragon ball"]}/>

            {/*Gifts */}
            <GiftList gifts={mockGifs}/>
        </>
    )
}