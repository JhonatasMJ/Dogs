import { useState } from 'react';
import { z } from 'zod';
import { usernameSchema, passwordSchema, numberSchema } from '../Schema/FormSchema';


const schemas = {
    email: usernameSchema,
    password: passwordSchema,
    number: numberSchema
  

};

const useForm = (type = '') => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  // Função de validação com Zod
  function validate(value) {
    if (type && schemas[type]) {
      try {
        schemas[type].parse(value); // Tenta validar com o esquema definido
        setError(null); // Sem erros
        return true;
      } catch (err) {
        setError(err.errors[0].message); // Exibe a primeira mensagem de erro
        return false;
      }
    } else if (!value) {
      setError('Este campo é obrigatório');
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  // Atualiza o valor e valida se já houver erros
  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  function onBlur() {
    validate(value); // Valida ao perder o foco
  }

  return {
    value,
    setValue,
    onChange,
    onBlur,
    error,
    validate: () => validate(value), // Validação manual ao submeter o formulário
  };
};

export default useForm;
