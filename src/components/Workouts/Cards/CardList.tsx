import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { Workout } from '../../../types';
import { fetchWorkouts } from '../../../api/workouts';
import Card from './Card';
import { Spinner } from '../../UI/Spinner';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { Button } from 'react-aria-components';

const CardList = () => {
  const [page, setPage] = useState(1);
  const results: number = 5;
  const { isPending, isError, error, data, isPlaceholderData } = useQuery({
    queryKey: ['workouts', page, results],
    queryFn: () => fetchWorkouts(page, results),
    placeholderData: keepPreviousData,
  });

  return (
    <>
      {isPending ? (
        <div className='m-12 text-center'>
          <Spinner />
          <p className='mt-6'>Loading...</p>
        </div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <>
          {data.workouts.map((workout: Workout) => (
            <Card key={workout.id} workout={workout} />
          ))}
          <div className='flex justify-evenly mt-4'>
            <Button
              onPress={() => setPage((prev) => Math.max(prev - 1, 1))}
              isDisabled={page === 1}
              className='text-slate-100 outline-none data-[focus-visible]:ring data-[focus-visible]:ring-green-300 data-[disabled]:invisible'
            >
              <ChevronLeftIcon className='h-10 w-10' />
            </Button>
            <span className='px-3 text-2xl'>{page}</span>
            <Button
              onPress={() => {
                if (!isPlaceholderData && data.hasMorePages) {
                  setPage((prev) => prev + 1);
                }
              }}
              isDisabled={isPlaceholderData || !data?.hasMorePages}
              className='text-slate-100 outline-none data-[focus-visible]:ring data-[focus-visible]:ring-green-300 data-[disabled]:invisible'
            >
              <ChevronRightIcon className='h-10 w-10' />
            </Button>
          </div>
        </>
      )}
    </>
  );
};
export default CardList;
