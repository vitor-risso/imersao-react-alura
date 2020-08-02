import { useState } from 'react';

function useForm(valoresIniciais) {
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

  function clearForm() {
    setValues(valoresIniciais);
  }

  return {
    clearForm,
    handleChange,
    values,
  };
}

export default useForm;
