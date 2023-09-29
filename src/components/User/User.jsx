import React from 'react';
import UserHeader from './UserHeader';
import Feed from '../Feed/Feed';
import { Routes, Route } from 'react-router-dom';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';
import { UserContext } from '../../UserContext';
import NotFound from '../NotFound';
import Head from '../Helper/Head';

function User() {
  const { data } = React.useContext(UserContext);
  return (
    <>
      <Head
        title="Minha Conta"
        description="Página da minha conta de usuário."
      />
      <section className="container">
        <UserHeader />
        <Routes>
          <Route path="/" element={<Feed user={data.id} />} />
          <Route path="postar" element={<UserPhotoPost />} />
          <Route path="estatisticas" element={<UserStats />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </section>
    </>
  );
}

export default User;
