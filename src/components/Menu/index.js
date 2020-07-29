import React from 'react';
import { Link } from 'react-router-dom';
import pipoca_logo from '../../assets/img/pipoca_logo.png';
import './Menu.css';
import Button from '../components/Button';
//import ButtonLink from '../components/ButtonLink'

function Menu () {
    return (
        <nav className = "Menu">
            <Link to= "/"> 
            <img className="Logo" src={pipoca_logo} alt="Pipocaflix logo"/>
            </Link>  

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>        
        </nav>

    );
    }

    export default Menu; //belezinha