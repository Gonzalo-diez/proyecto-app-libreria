import React, { useContext, useState, useEffect } from "react";
import { Auth } from "../Firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged, signOut } from "firebase/auth"

const AuthContext = React.createContext({
  currentUser: null,
  signup: () => Promise,
  login: () => Promise,
  resetPassword: () => Promise,
  updateEmail: () => Promise,
  updatePassword: () => Promise,
  logout: () => Promise
})

const { Provider } = AuthContext

export function useAuth() {
  return useContext(AuthContext)
}

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

const signup = async (email, password) => {
    return createUserWithEmailAndPassword(Auth, email, password)
}

const login = async (email, password) => {
    return signInWithEmailAndPassword(Auth, email, password)
}

const logout = async () => {
    return signOut(Auth)
}

const resetPassword = async (email, password) => {
    return sendPasswordResetEmail(Auth, email, password)
}

const updateEmail = async (email) => {
    return currentUser.updateEmail(email)
}

const updatePassword = async (password) => {
    return currentUser.updatePassword(password)
}

useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
}, [])

const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
}

return (
    <Provider value={value}>
      {!loading && children}
    </Provider>
  )
}