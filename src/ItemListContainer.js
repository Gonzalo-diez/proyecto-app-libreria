import { render } from "@testing-library/react";
import React from "react";

const ItemListContainer = (greetings) => {
    const name = "Usuario"
    return(
        <p>
            Bienvenido {name}, a mi E-commerce
        </p>
    )
}

render(<ItemListContainer name="Usuario"/>)

export default ItemListContainer