import React from "react";
import NavBar from "./NavBar"
import Footer from "./Footer"


function ItemDetail() {
    return (
                <>
                    <NavBar />
                    <div className="descripciones">
                        <h2>Saga de libros harry Potter</h2>
                        <h3>Autor/a: J.K Rowling</h3>
                        <img src="./saga-harry-potter.png" />
                        <p>Resumen: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores corrupti quos nobis.</p>
                    </div>
                    <Footer />
                </>
            )
}

export default ItemDetail;
