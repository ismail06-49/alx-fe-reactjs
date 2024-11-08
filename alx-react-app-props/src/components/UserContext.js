import React from "react";

export const UserContext = React.createContext();

export default function UserProvider({ children }) {

    return (
        <UserContext.Provider >
            {children}
        </UserContext.Provider>
    )
}