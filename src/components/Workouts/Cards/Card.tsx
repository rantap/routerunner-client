import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteWorkout } from '../../../api/workouts';
import { formatDuration } from '../../../utils/formatDuration';
import { calculateAvgPace } from '../../../utils/calculateAvgPace';
import { Button } from 'react-aria-components';
import {
  ChevronUpIcon,
  ChevronDownIcon,
  TrashIcon,
} from '@heroicons/react/24/solid';
import { Workout } from '../../../types';
import EditModal from '../Modals/EditModal';

interface Props {
  workout: Workout;
}
const Card = ({ workout }: Props) => {
  const [isExpanded, setExpanded] = useState(false);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: deleteWorkout,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['workouts'] });
    },
  });

  const handleDelete = (id: number) => {
    mutation.mutate(id);
  };
  return (
    <div className='md:5/6 lg:w-6/6 mx-auto mt-3'>
      <p className='ml-2 text-sm text-slate-700 dark:text-slate-200'>
        {new Date(workout.date).toLocaleDateString('en-GB')}
      </p>
      <div className='rounded-lg bg-slate-50 pt-4 shadow-md dark:bg-zinc-800'>
        <div
          className='flex flex-wrap justify-between px-6 pb-8 pt-4 text-slate-700 hover:cursor-pointer dark:text-slate-200 sm:pb-4 sm:pt-0'
          onClick={() => setExpanded(!isExpanded)}
        >
          <p>{workout.type}</p>
          <p>{workout.distance} km</p>
          <p>{formatDuration(workout.duration)}</p>
          {isExpanded ? (
            <ChevronUpIcon className='h-6 w-6' />
          ) : (
            <ChevronDownIcon className='h-6 w-6' />
          )}
        </div>
        <div
          className={`${
            isExpanded ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-500 ease-in-out`}
        >
          {isExpanded && (
            <div className='flex justify-between px-6 pb-2 sm:pt-4'>
              <span className='my-1 mr-4 text-sm text-slate-700 dark:text-slate-200 md:text-base'>
                Average pace:{' '}
                {formatDuration(
                  calculateAvgPace(workout.duration, workout.distance),
                )}{' '}
                /km
              </span>
              <div className='flex'>
                <EditModal workout={workout} />
                {/* TODO: separate into own component -- add delete confirmation prompt */}
                <Button
                  onPress={() => handleDelete(workout.id)}
                  className='mb-4 rounded-full bg-red-400 p-4 text-black shadow-md outline-none hover:bg-red-500 data-[focus-visible]:ring data-[focus-visible]:ring-orange-300'
                  aria-label='delete'
                >
                  <TrashIcon className='mx-auto h-5 w-5' />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Card;
