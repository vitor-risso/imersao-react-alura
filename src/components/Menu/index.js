import React from 'react';
import { Link } from 'react-router-dom';
import sertanejo_logos from '../../assets/img/sertanejoflix.png';
import './Menu.css';
import Button from '../components/Button';
// import ButtonLink from '../components/ButtonLink'

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={sertanejo_logos} alt="Pipocaflix logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>

  );
}

export default Menu; // belezinha
