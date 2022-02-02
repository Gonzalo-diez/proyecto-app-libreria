import React, { useContext, useState, useEffect } from "react";
import { Auth } from "../Nucleo/Firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged } from "firebase/auth"

const AuthContext = React.createContext({
  currentUser: null,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged
})

const { Provider } = AuthContext

export function useAuth() {
  return useContext(AuthContext)
}

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

function signup(email, password) {
    return Auth.createUserWithEmailAndPassword(email, password)
}

function login(email, password) {
    return Auth.signInWithEmailAndPassword(email, password)
}

function logout() {
    return Auth.signOut()
}

function resetPassword(email) {
    return Auth.sendPasswordResetEmail(email)
}

function updateEmail(email) {
    return currentUser.updateEmail(email)
}

function updatePassword(password) {
    return currentUser.updatePassword(password)
}

useEffect(() => {
    const unsubscribe = Auth.onAuthStateChanged(user => {
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