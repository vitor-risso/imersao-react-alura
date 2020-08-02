import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../../components/Button';
import PageDefault from '../../../PageDefault';
import FormField from '../../../FormFIeld';
import useForm from '../../../hooks/useForm';
import videosRepositry from '../../../../repositories/videos';

function CadastroVideo() {
  const history = useHistory();
  const { handleChange, values } = useForm({
    titulo: 'VídeoPadrão',
    url: 'https://www.youtube.com/watch?v=YZT1U2rlvyM',
    categoria: 'Jorge & Mateus',

  });

  return (
    <PageDefault>

      <h1>
        Cadstro de vídeo
      </h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        // alert('Vídeo cadastrado com sucesso');
        videosRepositry.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: 1,
        })
          .then(() => {
            console.log(`cadastrou`)
            history.push('/');
          });
      }}
      >
        <FormField
          label="Título do vídeo: "
          name="titulo"
          type="text"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL: "
          name="url"
          type="text"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria: "
          name="url"
          type="text"
          value={values.categoria}
          onChange={handleChange}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastro de Categoria
      </Link>

    </PageDefault>

  );
}

export default CadastroVideo;
