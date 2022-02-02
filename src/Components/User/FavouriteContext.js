import React, { useState } from "react"

export const FavouriteContext = React.createContext({
    like: []
})

const { Provider } = FavouriteContext

const FavouriteProvider = ({ children }) => {
    const [like, setLike] = useState([])
  
    const agregarLista = (producto, cantidad) => { 
        if (isInList(producto.id)) {
            console.log(`Agregaste el mismo producto a la lista de productos deseados`);
        } else {
            console.log(`Agregaste ${producto.title} a la lista de  productos deseados`);
            const newObj = {
              item: producto,
              cantidad
            }
            setLike([...like, newObj])
        }
    } 
    
    const eliminarProducto = (id) => { 
        const updateList = like.filter(elemento => elemento.item.id !== id)
        setLike(updateList)
    }
    
    const limpiarLista = () => {
        setLike([])
     }

    const isInList = (id) => {
        return like.some(elemento => elemento.item.id === id)
    }

    const value = { 
        like,  
        agregarLista,
        eliminarProducto, 
        limpiarLista
    }

    return (
        <Provider value={value}>
            {children}
        </Provider>
    )
}


export default FavouriteProvider