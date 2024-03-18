import CardList from './Cards/CardList';
import Chart from './Charts/Chart';
import { useState } from 'react';
import { useWorkouts } from '../../hooks/useWorkouts';
import { Spinner } from '../UI/Spinner';

const AllWorkouts = () => {
  const [page, setPage] = useState<number>(1);
  const results: number = 5;
  const { isPending, data } = useWorkouts(page, results);

  if (isPending) {
    return (
      <div className='m-12 text-center'>
        <Spinner />
        <p className='mt-6'>Loading...</p>
      </div>
    );
  }
  return (
    <div className='lg:flex flex-row gap-16'>
      <div className='lg:w-1/2'>
        <CardList results={results} page={page} setPage={setPage} />
      </div>
      <div className='w-full lg:w-1/2 mt-8'>
        <Chart data={data} />
      </div>
    </div>
  );
};
export default AllWorkouts;
