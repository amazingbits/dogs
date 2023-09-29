import React from 'react';
import Head from '../Helper/Head';
import useFetch from '../../hooks/useFetch';
import { STATS_GET } from '../../api';
import Loading from '../Helper/Loading';
import Error from '../Helper/Error';
const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs'));

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <>
        <Head
          title="Estatísticas"
          description="Página de estatísticas do site Dogs."
        />
        <div>
          <React.Suspense fallback={<div></div>}>
            <UserStatsGraphs data={data} />
          </React.Suspense>
        </div>
      </>
    );
  else return null;
};

export default UserStats;
