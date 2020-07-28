import React from 'react';
import PageDefault from '../../../PageDefault';
import {Link} from 'react-router-dom';




function CadastroVideo() {
    return(
      <PageDefault>
       
        <h1>
         Cadstro de vídeo 
        </h1>
          
        
        <Link to='/cadastro/categoria'>
            Cadastro de Categoria
        </Link>
       
          
        
      </PageDefault>
    
    ) ;
  }

export default CadastroVideo;