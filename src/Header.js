import React from 'react';

function Header() {
    return(
        <header>
            <img
                src={require("./img/Trollface.png")}
                alt='Trollface'
            />
            <p>Meme Generator</p>
        </header>
    )
}

export default Header;