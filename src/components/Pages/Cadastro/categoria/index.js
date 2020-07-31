import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../PageDefault/index';

import FormField from '../../../FormFIeld';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000',
  };
  const [values, setValues] = useState(valoresIniciais);

  function setvalue(chave, valor) {
    setValues({
      // chave : nome, descricao, cor
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(infoDosEventos) {
    setvalue(

      infoDosEventos.target.getAttribute('name'),
      infoDosEventos.target.value,
    );
  }

  useEffect(() => {
    const URL = window.location.href.includes('localhost')
      ? 'https://localhost8080/categorias'
      : 'https://pipocaflix.herokuapp.com/categorias';
    fetch(URL)
      .then(async (respostaDoServer) => {
        if (respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          setCategorias(resposta);
          return;
        }
        throw new Error('Não foi possível pegar os dados');
      });
  }, []);
  return (
    <PageDefault>

      <h1>
        Cadastro de Categoria:
        {' '}
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(infoDosEventos) {
        infoDosEventos.preventDefault();
        setCategorias([
          ...categorias,
          values,

        ]);

        setValues(valoresIniciais);
      }}
      >
        {/* state */}

        <FormField
          label="Nome da Categoria: "
          name="nome"
          type="text"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição: "
          name="descricao"
          type="textarea"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="cor"
          name="cor"
          type="color"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
      <div>
        Carregando...
      </div>
      )}

      <ul>
        {categorias.map((categorias) => (
          <li key={`${categorias.nome}`}>
            {categorias.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>

    </PageDefault>

  );
}

export default CadastroCategoria;
