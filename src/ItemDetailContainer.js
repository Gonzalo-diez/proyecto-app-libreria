import React from "react";
import ItemCount from "./ItemCount";
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
    return (
        <div>
            <ItemDetail />
            <ItemCount />
        </div>
    )
}

export default ItemDetailContainer