import React from 'react';
import ChildrenComponent from './ChildrenComponent';
export const ThemeContext = React.createContext();
const ContextApp = () => {
    const [dark, setDark] = React.useState(true);

    const atChangeColor = () => {
        console.log('sss')
        setDark(!dark);
    }
    return (
        <ThemeContext.Provider value={{dark, atChangeColor}} >
            <ChildrenComponent />
        </ ThemeContext.Provider>
    );
};

export default ContextApp;
