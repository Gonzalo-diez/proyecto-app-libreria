import React from "react";
import "./CSS/App.css"


function Ayuda() {
    return (
        //La sección de ayuda ante problemas o consultas.
        <div className="ayudaBox">
            <h1>Si tiene algun problema, consulta o queja escriba aquí: </h1>
            <textarea className="ayuda" cols="30" rows="10" placeholder="Escriba su problema o consulta"></textarea>
            <div className="btnAyuda">
                <button><input type="submit" /></button>
                <button><input type="reset" /></button>
            </div>
        </div>
    )
}

export default Ayuda