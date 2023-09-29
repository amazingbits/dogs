import React from 'react';
import { useParams } from 'react-router-dom';
import Feed from '../Feed/Feed';
import Head from '../Helper/Head';

const UserProfile = () => {
  const { user } = useParams();

  return (
    <>
      <Head title={user} description="Página de usuário do site Dogs." />
      <section className="container mainSection">
        <h1 className="title">{user}</h1>
        <Feed user={user} />
      </section>
    </>
  );
};

export default UserProfile;
