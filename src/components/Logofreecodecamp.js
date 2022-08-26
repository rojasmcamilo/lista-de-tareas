import React from "react";
import Logo from '../img/logo.png';
import '../css/Logofreecodecamp.css';

function LogoFreeCodeCamp (){
    return(
        <div className='freecodecamp-logo-contenedor'>
            <img 
            src={Logo} 
            alt="Logo freeCodeCamp"
            className='freecodecamp-logo' />
        </div>
    )
}

export default LogoFreeCodeCamp;