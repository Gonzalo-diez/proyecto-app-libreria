import React from "react";
import item from "./item.json"
import { useEffect,useState } from "react";


const productosNuevos = item

function ItemList() {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const promesa = new Promise((res, rej) => {
            setTimeout(() => {
                res(productosNuevos)
            }, 2000)
        })
        promesa.then((productosNuevos) => {
            console.log(productosNuevos)
            setLoading(false)
            setProductos()
        })
    }, [])

    if(loading) {
        return (
            <p>nada</p>
        )
    }
    else return (
        [productos]
    )
}

export default ItemList;