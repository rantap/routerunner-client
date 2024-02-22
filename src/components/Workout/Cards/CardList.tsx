import { useQuery } from '@tanstack/react-query';
import { Workout } from '../../../types';
import { fetchWorkouts } from '../../../api/workouts';
import Card from './Card';
import { Spinner } from '../../UI/Spinner';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { sortByDate } from '../../../utils/sortByDate';
import { useState } from 'react';
import { Button } from 'react-aria-components';

const CardList = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['workouts'],
    queryFn: fetchWorkouts,
  });

  if (isError) return <p>Error: {error.message}</p>;
  const workouts = data ? sortByDate(data) : [];

  return (
    <>
      {isLoading ? (
        <div className='text-center m-12'>
          <Spinner />
          <p className='mt-6'>Loading...</p>
        </div>
      ) : (
        <>
          {workouts.map((workout: Workout) => (
            <Card key={workout.id} workout={workout} />
          ))}
        </>
      )}
      <div className='flex justify-evenly mt-4'>
        <Button onPress={() => setPageIndex(pageIndex - 1)}>
          <ChevronLeftIcon className='h-10 w-10 text-slate-100' />
        </Button>
        <Button className='text-2xl px-3'>{pageIndex}</Button>
        <Button onPress={() => setPageIndex(pageIndex + 1)}>
          <ChevronRightIcon className='h-10 w-10 text-slate-100' />
        </Button>
      </div>
    </>
  );
};
export default CardList;
