import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../PageDefault/index';
import FormField from '../../../FormFIeld/index';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

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

        clearForm();
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
        {categorias.map((categoria) => (
          <li key={`${categoria}`}>
            {categoria.titulo}
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
