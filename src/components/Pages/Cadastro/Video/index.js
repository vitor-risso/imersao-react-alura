import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import FormField from '../../../FormFIeld';
import PageDefault from '../../../PageDefault';
import useForm from '../../../hooks/useForm';

function CadastroVideo() {
  const { handleChange, values } = useForm({ });

  return (
    <PageDefault>

      <h1>
        Cadstro de vídeo
      </h1>

      <form>

        <FormField
          label="Título do vídeo: "
          name="titulo"
          type="text"
          value={values.titulo}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>

      </form>

      <Link to="/cadastro/categoria">
        Cadastrar categoria
      </Link>

    </PageDefault>

  );
}

export default CadastroVideo;
