import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { PHOTO_GET } from '../../api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import PhotoContent from './PhotoContent';
import Head from '../Helper/Head';

const Photo = () => {
  const { id } = useParams();
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [id, request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data) {
    return (
      <>
        <Head
          title={data.photo.title}
          description={`Página do(a) ${data.photo.title}`}
        />
        <section className={`container mainContainer`}>
          <PhotoContent data={data} single={true} />
        </section>
      </>
    );
  } else {
    return null;
  }
};

export default Photo;
