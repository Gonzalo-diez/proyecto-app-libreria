import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { collection, doc, getDoc } from "firebase/firestore"

function UserContainer() {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const { like } = useParams()

    useEffect(() =>  {
        const coleccionWish = collection(db, "Items")
        const docRef = doc(coleccionWish, like)
        const pedido = getDoc(docRef)

        pedido
        .then()
    })

}