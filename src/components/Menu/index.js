import React from 'react';
import { Link } from 'react-router-dom';
import react_yellow_logo from '../../assets/img/react_yellow_logo.png';
import './Menu.css';
import Button from '../components/Button';
//import ButtonLink from '../components/ButtonLink'

function Menu () {
    return (
        <nav className = "Menu">
            <Link to= "/"> 
            <img className="Logo" src={react_yellow_logo} alt="Reactflix logo"/>
            </Link>  

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>        
        </nav>

    );
    }

    export default Menu; //belezinha