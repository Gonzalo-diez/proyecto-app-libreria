import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function ItemCount({stock = 20, initial = 0, onAdd}) {
    //La función es un contador de la cantidad de productos que uno quiero ingresar en el carrito
    //El useEffect es para setear los valores del contador 
    const [contador, setContador] = useState(initial)
    //Función para cuando el usuario quiera aumentar el contador
    const aumentarContador = () => {
        setContador(contador + 1);
    }
    //Función para cuando el usuario quiera disminuir el contador
    const disminuirContador = () => {
        setContador(contador - 1);
    }
    //Función para limitar el contador según el stock y que no vaya a valores negativos
    const limiteContador = () => {
        if(contador === stock) {
            setContador(contador - 1)
            alert("Ya se acabo el stock")
        }
        else if (contador === 0) {
            setContador(contador + 1)
        }
    }
    //Función para cuando el quiera agregar el producto al carrito, siempre y cuando el contador sea mayor a 0
    const agregarCarrito = () => {
        if(contador > 0){
            onAdd(contador)
        } 
        else {
            return(
                console.log("No se agrego ningún producto")
            )
        }
    } 
    //Estructura del ItemCount
    return(
        <div className="card">
            <div className="shopCount">
                <h1>Contador</h1>
                <h2>{contador}</h2>
            </div>
            <div className="botones" onClick={limiteContador}>
                <button onClick={aumentarContador}><FontAwesomeIcon icon={faPlus} /></button>
                <button onClick={disminuirContador}><FontAwesomeIcon icon={faMinus} /></button>
            </div>
            <div className="cartIcon">
            <button onClick={agregarCarrito}><FontAwesomeIcon icon={faShoppingCart}/></button>
            </div>
        </div>
    )
}

export default ItemCount