import { Workout } from '../../../types';
import Card from './Card';
import { Spinner } from '../../UI/Spinner';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { Button } from 'react-aria-components';
import { useWorkouts } from '../../../hooks/useWorkouts';

type Props = {
  results: number;
  page: number;
  setPage: (value: number | ((prev: number) => number)) => void;
};
const CardList = ({ results, page, setPage }: Props) => {
  const { isPending, isError, error, data, isPlaceholderData } = useWorkouts(
    page,
    results,
  );

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
