import React from 'react';
import react_yellow_logo from '../../assets/img/react_yellow_logo.png';
import './Menu.css';
import Button from '../components/Button';
//import ButtonLink from '../components/ButtonLink'

function Menu () {
    return (
        <nav className = "Menu">
            <a href = "/"> 
            <img className="Logo" src={react_yellow_logo} alt="Reactflix logo"/>
            </a>  

            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>         
        </nav>

    );
    }

    export default Menu; //belezinha