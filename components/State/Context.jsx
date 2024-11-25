'use client'
import { createContext, useState } from "react";

const DisplayContext = createContext({
    progress: '',
    show: '',  
    showLogin: () => {},
    hideLogin: () => {},
    showSignup: () => {},
    hideSignup: () => {},
    colorLight: () => {},
    colorDark: () => {},
});

export function DisplayContextProvider({ children }) {
    const [userProgress, setUserProgress] = useState(''); 
    const [changeColor, setChangeColor] = useState(true)

    function showLogin() {
        setUserProgress('login');
    }
    
    function hideLogin() {
        setUserProgress('');
    }

    function showSignup() {
        setUserProgress('signup');
    }
    
    function hideSignup() {
        setUserProgress('');
    }

    function colorLight() {
        setChangeColor(true)
    }
    
    function colorDark() {
        setChangeColor(false)
    }

    const DisplayCtx = {
        progress: userProgress, 
        show: changeColor ,
        showLogin,
        hideLogin,
        showSignup,
        hideSignup,
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
