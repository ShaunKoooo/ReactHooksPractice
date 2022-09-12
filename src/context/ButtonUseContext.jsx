import { useContext } from "react";
import { ThemeContext } from "./ContextApp";

// useContext 用法
const ButtonUseContext = () => {
    const darkTheme = useContext(ThemeContext);
    const ThemeStyle = {
        backgroundColor: darkTheme.dark ? 'black' : 'white',
    }
    return (
        <button style={ThemeStyle} onClick={darkTheme.atChangeColor}>click</button>
    );
};

export default ButtonUseContext;