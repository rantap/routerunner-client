import CardList from './Cards/CardList';
import Chart from './Charts/Chart';
import { useState } from 'react';
import { useWorkouts } from '../../hooks/useWorkouts';
import { Spinner } from '../UI/Spinner';
type Props = {
  isDark: boolean;
};
const AllWorkouts = ({ isDark }: Props) => {
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
    <div className='flex-row gap-16 lg:flex'>
      <div className='h-full lg:w-2/5'>
        <CardList results={results} page={page} setPage={setPage} />
      </div>
      <div className='h-full w-full rounded-lg bg-slate-50 shadow-md dark:bg-zinc-800 lg:w-3/5 lg:p-4'>
        <Chart data={data} isDark={isDark} />
      </div>
    </div>
  );
};
export default AllWorkouts;
