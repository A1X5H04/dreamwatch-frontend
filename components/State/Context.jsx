'use client'
import { createContext, useState } from "react";

const DisplayContext = createContext({
    show: '',  
    colorLight: () => {},
    colorDark: () => {},
});

export function DisplayContextProvider({ children }) {
    const [changeColor, setChangeColor] = useState(true)

    function colorLight() {
        setChangeColor(true)
    }
    
    function colorDark() {
        setChangeColor(false)
    }

    const DisplayCtx = {
        show: changeColor ,
        colorLight,
        colorDark,
    };

    return (
        <DisplayContext.Provider value={DisplayCtx}>
            {children}
        </DisplayContext.Provider>
    );
}

export default DisplayContext;
