

import {ThemeContext} from './ContextApp';
const Button = () => {

    const ThemeStyle = (dark) => {
        return {
            backgroundColor: dark ? 'black' : 'white',
        }
    }

    return (
        <ThemeContext.Consumer>
            {({atChangeColor, dark}) => 
                <button style={ThemeStyle(dark)} onClick={atChangeColor}>change color</button>
            }
        </ThemeContext.Consumer>
    );
};

export default Button;