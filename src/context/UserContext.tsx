import { createContext, useState } from "react";

export const UserContext = createContext({
    id:"",
    nombre:"",
    edad:"",
    email:"",
    autorizado: false
    
});

export function UserProvider({children} : {children : React.ReactNode}) {
    const [user, setUser] = useState({
        id:"",
        nombre:"",
        edad:"",
        email:"",
        autorizado:false

    })

    return (
        //@ts-ignore
        <UserContext.Provider value = {{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}