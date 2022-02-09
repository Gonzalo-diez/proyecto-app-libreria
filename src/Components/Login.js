import React, { useState, useRef } from "react";
import { useAuth } from "./Context/AuthContext";
import { Link, useNavigate } from "react-router-dom"

export default function Login() {
    //Función de para logear el usuario
    //Uso del useRef para referenciar en la función y useState para setear los valores de la función y la carga
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
  
    //Esta función es para procesar el Login
    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            login(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError("Procesando...")
        }
        setLoading(false)
    }

    //Estructura de Login
    return (
        <div className="log-box-conntainer">
            <form className="log-box" onSubmit={handleSubmit}>
                <h2>Iniciar sesión</h2>
                {error && <p>{error}</p>}
                <label>E-mail</label>
                <input type="email" ref={emailRef} placeholder="Ingrese su E-mail" required />
                <label>Contraseña</label>
                <input type="password" ref={passwordRef} placeholder="Ingrese su contraseña" required />
                <div className="btn-crear">
                    <button disabled={loading} onClick={navigate(!loading ? "/User" : "/Login")}>Iniciar sesión</button>
                </div>
            </form>
            <div className="btn-inicio">
                <span>Se olvido su contraseña?</span> <Link to={"/ForgotPassword"}>Resetear contraseña</Link>
                <br />
                <span>No tiene cuenta?</span> <Link to="/SignUp">Registrese</Link>
            </div>
        </div>
    )
}

