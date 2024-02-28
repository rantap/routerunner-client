import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteWorkout } from '../../../api/workouts';
import { formatDuration } from '../../../utils/formatDuration';
import { calculateAvgPace } from '../../../utils/calculateAvgPace';
import { Button } from 'react-aria-components';
import { ChevronUpIcon, ChevronDownIcon, TrashIcon } from '@heroicons/react/24/solid';
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
    <div className='mx-auto mt-3 md:5/6 lg:w-4/6'>
      <p className='ml-2 text-sm text-slate-300'>
        {new Date(workout.date).toLocaleDateString('en-GB')}
      </p>
      <div className='pt-4 bg-zinc-800 rounded-lg'>
        <div
          className='flex flex-wrap justify-between px-6 pt-4 pb-8 text-slate-100 hover:cursor-pointer sm:pt-0 sm:pb-4'
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
          } transition-opacity ease-in-out duration-500`}
        >
          {isExpanded && (
            <div className='flex justify-between pb-2 px-6 sm:pt-4'>
              <span className='text-sm text-slate-100 mr-4 my-1 md:text-base'>
                Average pace: {formatDuration(calculateAvgPace(workout.duration, workout.distance))}{' '}
                /km
              </span>
              <div className='flex'>
                <EditModal workout={workout} />
                {/* TODO: separate into own component -- add delete confirmation prompt */}
                <Button
                  onPress={() => handleDelete(workout.id)}
                  className='mb-4 p-4 bg-red-400 text-black rounded-full hover:bg-red-500 outline-none data-[focus-visible]:ring data-[focus-visible]:ring-orange-300'
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
