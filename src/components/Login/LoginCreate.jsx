import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import Error from '../Helper/Error';
import useForm from '../../hooks/useForm';
import { USER_POST } from '../../api';
import { UserContext } from '../../UserContext';
import useFetch from '../../hooks/useFetch';
import Head from '../Helper/Head';

function LoginCreate() {
  const username = useForm();
  const email = useForm('email');
  const password = useForm();
  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { apiResponse } = await request(url, options);
    if (apiResponse.ok) await userLogin(username.value, password.value);
  }

  return (
    <>
      <Head
        title="Cadastre-se"
        description="Página de cadastro do site Dogs."
      />
      <section className="animeLeft">
        <h1 className="title">Cadastre-se</h1>
        <form onSubmit={handleSubmit}>
          <Input type="text" name="username" label="Usuário" {...username} />
          <Input type="email" name="email" label="E-mail" {...email} />
          <Input type="password" name="password" label="Senha" {...password} />
          {loading ? (
            <Button disabled>Cadastrando...</Button>
          ) : (
            <Button>Cadastrar</Button>
          )}
          <Error error={error} />
        </form>
      </section>
    </>
  );
}

export default LoginCreate;
