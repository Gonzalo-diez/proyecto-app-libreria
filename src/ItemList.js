import React from "react";
import Item from "./Item"
import { useEffect,useState } from "react";




function ItemList() {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const promesa = new Promise((res, rej) => {
            setTimeout(() => {
                res(<Item />)
            }, 2000)
        })
        promesa.then((productos) => {
            setLoading(false)
            setProductos(productos)
        })
    }, [])

    if(loading) {
        return (
            <p>cargando ...</p>
        )
    }
    else{
        return (
            <Item />
        )
    }
}

export default ItemList;