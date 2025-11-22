import React, { useState } from "react";
import AuthContext from "./AuthContext";

export const AuthProvider = ({children}) => {
    //Using localStorage to make sure login state persists throughout the app
    const [user, setUser] = useState(() => {
        const previousUser = localStorage.getItem("user");
        return previousUser ? JSON.parse(previousUser) : null;
    })


    const login = (username) => {
        const newUser = {username};
        setUser(newUser);
        localStorage.setItem("user", JSON.stringify(newUser));
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    }

    return <AuthContext.Provider value={{
        user, login, logout
    }}>{children}</AuthContext.Provider>
}