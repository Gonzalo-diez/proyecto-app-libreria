import { render } from "@testing-library/react";
import React from "react";
import ItemList from "./ItemList"


function ItemListContainer ({greetings}) {
    <ItemList />
    const name = "Usuario"
    return(
        <div>
            <p>
                Bienvenido {name}, a mi E-commerce
            </p>
            
        </div>
    )
}

render(<ItemListContainer name="Usuario"/>)

export default ItemListContainer