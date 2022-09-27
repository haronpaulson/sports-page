import React, {createContext, useContext } from "react";

export const StateLayer = createContext();


export const StateProvider = ({children}) => (
    <StateLayer.Provider value= {"guest"}>
        {children}
    </StateLayer.Provider>
);

export const useStateValue = () => useContext(StateLayer);