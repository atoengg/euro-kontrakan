"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { onAuthStateChanged, User, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import { auth } from "@/app/firebase/config"

type AuthContextType = {
    user: User | null
    login: (email: string, password: string) => Promise<void>
    loginWithGoogle: () => Promise<User>
    logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
        })
        return () => unsubscribe()
    }, [])

    const login = async (email: string, password: string) => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
        } catch (error) {
            console.error("Login failed", error)
            throw error
        }
    }

    const loginWithGoogle = async () => {
        const provider = new GoogleAuthProvider()
        try {
           const result = await signInWithPopup(auth, provider)
           const user = result.user
           return user
        } catch (error) {
            console.error("Google Sign-In failed", error)
            throw error
        }
    }

    const logout = async () => {
        await signOut(auth)
    }

    return (
        <AuthContext.Provider value={{ user, login, loginWithGoogle, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}
