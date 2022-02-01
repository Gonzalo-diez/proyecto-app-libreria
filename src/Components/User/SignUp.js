import React, { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "./AuthContext"

function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Las contraseñas no son iguales")
        }

        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError("Procesando en el sistema...")
        }
        setLoading(false)
    }

    return(
        <div className="sign-box-conntainer">
            <form className="sign-box" onSubmit={handleSubmit}>
                <h2>Crear cuenta</h2>
                {error && <span>{error}</span>}
                <label>Nombre</label>
                <input type="text" name="nombre" placeholder="Ingrese su nombre" required />
                <label>Apellido</label>
                <input type="text" name="apellido" placeholder="Ingrese su apellido" required />
                <label>Nombre de usuario</label>
                <input type="text" name="userName" placeholder="Ingrese nombre de usuario" required />
                <label>E-mail</label>
                <input type="email" name="email" ref={emailRef} placeholder="Ingrese su E-mail" required />
                <label>Contraseña</label>
                <input type="password" name="contraseña" ref={passwordRef} placeholder="Ingrese su contraseña" required />
                <label>Confirmar contraseña</label>
                <input type="password" name="contraseña" ref={passwordConfirmRef} placeholder="Confirmar contraseña" required />
                <div className="btn-crear">
                    <button disabled={loading}><Link to={"/User"}>Crear cuenta</Link></button>
                </div>
            </form>
            <div className="btn-inicio1">
                <span>Ya tiene cuenta?</span> <Link to="/Login">Inicie sesión</Link>
            </div>
        </div>
    )
}

export default SignUp