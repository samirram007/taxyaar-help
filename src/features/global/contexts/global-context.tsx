
import { type ReactNode } from "react";

import React, { createContext } from "react";
interface GlobalContextType {

};
const GlobalContext = createContext<GlobalContextType | undefined>(undefined);



export const GlobalContextProvider = ({ children }: { children: ReactNode }) => {


    return (
        <GlobalContext.Provider
            value={{

            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    const context = React.useContext(GlobalContext);
    if (context === undefined) {
        throw new Error("useGlobalContext must be used within a GlobalContextProvider");
    }
    return context;
};