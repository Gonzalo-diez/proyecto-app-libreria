import React from "react";
import { useState, useEffect } from "react"


function Cart() {
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const promesa = new Promise((res,rej) => {
            setTimeout(() => {
               res() 
            }, 2000)
        })
        promesa.then((x) => {
            setCart(x)
            setLoading(false)
        })
    }, [])

    if(loading) {
        //Render de carga de los datos
        return (
            <p className="carga"></p>
        )
    }
    else {
        return (
            <h2>Aún sigue en construcción {cart}</h2>
        )
    }
}

export default Cart