import { useContext, useState } from "react"
import { FavouriteContext } from "./FavouriteContext"
import { Link } from "react-router-dom"
import { db } from "../Nucleo/Firebase"
import { addDoc, collection, Timestamp } from "firebase/firestore";
import User from "./User";


const UserContainer = () => {

    const [lista, setLista] = useState()
    const { like, eliminarProducto, limpiarLista } = useContext(FavouriteContext)
    const crearLista = () => {
        const docRef = addDoc(collection(db, "Lista"), {
            tel: 49819814,
            producto: like,
            date: Timestamp.fromDate(new Date())
        })
        const pedido = docRef
        pedido
        .then((res) => {
            setLista(res.id)
            console("Lista creada: " + res.id)
        })
        .catch((error) => {
            console.error(error)
        })
        limpiarLista()
    }

    if(like.length === 0) {
        return(
            <div>
                <h2>No se han agregado productos aún a lista</h2>
                <Link to={"/"}>Ir al inicio</Link>
            </div>
        )
    }
    else {
        return (
            <>
                {like.map((producto) => <User key={producto.item.id} producto={producto} eliminarProducto={eliminarProducto} limpiarLista={limpiarLista} like={like} /> )}
                <div>
                    <button onClick={limpiarLista}>Borar lista</button>
                </div>
            </>
        )
    }
}

export default UserContainer