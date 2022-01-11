import React from "react";
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {
    function onAdd() {
        console.log("Compra hecha")
    }
    return (
        <div>
            <ItemDetail onAdd={onAdd} />
        </div>
    )
}

export default ItemDetailContainer