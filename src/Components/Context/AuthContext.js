import React, { useContext, useState, useEffect } from "react";
import { Auth } from "../Firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged, signOut } from "firebase/auth"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

//Contexto que devuelve las funciones como promesas
const AuthContext = React.createContext({
  currentUser: null,
  signup: () => Promise,
  login: () => Promise,
  resetPassword: () => Promise,
  logout: () => Promise
})

const { Provider } = AuthContext

//Función para llamar el AuthContext, utilizada solo en Login, SignUp y ForgotPassword
export function useAuth() {
  return useContext(AuthContext)
}

//Proveedor y contexto de la autenticación del usuario
export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  //SigUp para cuando el usuario quiera registrarse, se guarde su email y ID en el firebase
  const signup = async (email, password) => {
      return createUserWithEmailAndPassword(Auth, email, password)
  }

  //Login para cuando el usuario quiera logearse en la App
  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(Auth, email, password)
    } catch (error) {
      if(error == "auth/user-not-found") {
        return (navigate(error ? "/Login" : "/NoUser"), toast("No se ha registrado aún"))
      }
      else if (error){
        return (navigate(!error ? "/Login" : "/User"), toast("Bienvenido"))
      }
    }
  }

  //LogOut para cuando el usuario quiera cerrar su sesión
  const logout = async () => {
      return signOut(Auth)
  }

  //ResetPassword para cuando el usuario se olvide su contraseña y requiere de una nueva
  const resetPassword = async (email, password) => {
      return sendPasswordResetEmail(Auth, email, password)
  }

  useEffect(() => {
      const unsubscribe = onAuthStateChanged(Auth, user => {
        setCurrentUser(user)
        setLoading(false)
      })

      return unsubscribe
  }, [])

  //Valores que devuelve el proveedor
  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword
  }

  //Proveedor de Auth para envolver en la App y asi las funciones son utilizadas correctamente
  return (
      <Provider value={value}>
        {!loading && children}
      </Provider>
    )
}