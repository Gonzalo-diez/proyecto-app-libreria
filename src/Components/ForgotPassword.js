import React, { useRef, useState } from "react"
import { useAuth } from "./Context/AuthContext"
import { Link } from "react-router-dom"

export default function ForgotPassword() {
  //Función de para crear una nueva conntraseña para el usuario
  //Uso del useRef para referenciar en la función y useState para setear los valores de la función y la carga
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  //Esta función es para que retorne que se le envio un e-mail y en caso de que haya un error retorne que fallo en enviar el e-mail
  async function handleSubmit(e) {
    e.preventDefault()
  
    try {
      setMessage("")
      setError("")
      setLoading(true)
      resetPassword(emailRef.current.value)
      setMessage("Se le ha enviado un E-mail, revise su correo")
    } catch {
      setError("Fallo en enviar E-mail")
    }
  
    setLoading(false)
    }
    return (
        <div className="reset-box-container">
            <form onSubmit={handleSubmit} className="reset-box">
                <h1>Reset de contraseña</h1>
                {error && <span>{error}</span>}
                {message && <span>{message}</span>}
                <br />
                <label>E-mail</label>
                <input type="email" ref={emailRef} placeholder="Ingrese su E-mail" required />
                <div className="btn-crear">
                    <button disabled={loading} type="submit">Se le enviara un E-mail</button>
                </div>
            </form>
            <div className="btn-inicio2">
                <Link to={"/login"}>Iniciar sesión</Link>
                <br />
                <span>Necesita una cuenta?</span> <Link to={"/SignUp"}>Registrese</Link>
            </div>
        </div>
  )
}