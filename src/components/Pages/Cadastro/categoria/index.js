import React, {useState} from 'react';
import PageDefault from '../../../PageDefault';
import {Link} from 'react-router-dom';

import FormField from '../../../FormFIeld'




function CadastroCategoria() {

    const [categorias, setCategorias] = useState([]);

    const valoresIniciais ={
      nome:'',
      descricao:'',
      cor:'#000',
    }
    const [values , setValues] = useState(valoresIniciais);

    function setvalue(chave, valor){
      setValues({
        // chave : nome, descricao, cor
        ...values,
        [chave]: valor,
      })

    }


  function handleChange(infoDosEventos) {
    setvalue(

      infoDosEventos.target.getAttribute('name'),
      infoDosEventos.target.value
    );
  }


    return(
      <PageDefault>
       
        <h1>
         Cadstro de Categoria: {values.nome}
        </h1>
        <form onSubmit={function handleSubmit(infoDosEventos){
          infoDosEventos.preventDefault();
          console.log('vc tentou enviar ne ');
          setCategorias([
            ...categorias,
            values
            
          ]);

          setValues(valoresIniciais)
        }}>
          {/* state*/}

          <FormField
            label ='Nome da Categoria: '
            name = 'nome'
            type="text"
            value = {values.nome}
            onChange ={handleChange }

          />


          <FormField 
            label ='Descrição: '
            name = 'descricao'
            type="textarea"
            value = {values.nome}
            onChange ={handleChange }

          />
        {/*
          <div>
            <label>
                Descriçaõ:
                <textarea
                type="text"
                value = {values.descricao}
                name='descricao'
                onChange ={handleChange }
                />
            </label>

        </div>*/}


        <FormField 
         label ='cor'
         name = 'cor'
         type="color"
         value = {values.nome}
         onChange ={handleChange }


        />
          
        { /* <div>
              <label>
                Cor:
                <input
                type="color"
                value = {values.cor}
                name='cor'
                onChange ={handleChange }
                />
              </label>
          </div>*/}

          <button>
            Cadastrar
          </button>
        </form>

        <ul>
          {categorias.map((categorias ,indice) =>{
            return (
              <li key ={`${categorias}${indice}`}>
                {categorias.nome}
              </li>
            )
          } 
          )}
        </ul>
        
        <Link to='/'>
            Ir para Home
        </Link>
       
          
        
      </PageDefault>
    
    ) ;
  }

export default CadastroCategoria;