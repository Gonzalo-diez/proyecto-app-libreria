import React, { useRef, useState } from "react"
import { useAuth } from "./AuthContext"
import { Link } from "react-router-dom"

export default function ForgotPassword() {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
  
    async function handleSubmit(e) {
      e.preventDefault()
  
      try {
        setMessage("")
        setError("")
        setLoading(true)
        await resetPassword(emailRef.current.value)
        setMessage("Check your inbox for further instructions")
      } catch {
        setError("Failed to reset password")
      }
  
      setLoading(false)
    }
    return (
        <div className="reset-box-container">
            <form onSubmit={handleSubmit} className="reset-box">
                <h1>Reset de contraseña</h1>
                {error && <span>{error}</span>}
                {message && <span>{message}</span>}
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