import { ItemCounter } from "./components/ItemCounter";



const itemsInCart=[
    {name: 'Licuadora', quantity:1},
    {name: 'play 5', quantity:4},
    {name: 'play 4', quantity:4},
    {name: 'notebook', quantity:1}
];

export function App(){
    console.log(itemsInCart);
    
    return(
        <>
            <h1>Carrito</h1>
            
            {
                itemsInCart.map(item=>(
                    <ItemCounter name={item.name} quantity={item.quantity}></ItemCounter>
                ))
            }
        </>
    )
}