import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../hooks/useForm';
import useFetch from '../../hooks/useFetch';
import { PASSWORD_LOST } from '../../api';
import Error from '../Helper/Error';
import Head from '../Helper/Head';

function LoginPasswordLost() {
  const login = useForm();
  const { data, error, loading, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('perdeu', 'resetar'),
      });
      await request(url, options);
    }
  }

  return (
    <>
      <Head title="Perdeu a senha?" description="Perdeu a sua senha?" />
      <section className="animeLeft">
        <h1 className="title">Perdeu a senha?</h1>
        {data ? (
          <p style={{ color: '#4c1' }}>{data}</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <Input
              label="E-mail / Usuário"
              type="text"
              name="login"
              {...login}
            />
            {loading ? (
              <Button disabled>Enviando...</Button>
            ) : (
              <Button>Enviar E-mail</Button>
            )}
          </form>
        )}
        <Error error={error} />
      </section>
    </>
  );
}

export default LoginPasswordLost;
