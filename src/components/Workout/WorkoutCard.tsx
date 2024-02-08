import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteWorkout } from '../../api/workouts';
import { formatDuration } from '../../utils/formatDuration';
import { Button } from 'react-aria-components';
import { ChevronUpIcon, ChevronDownIcon, TrashIcon } from '@heroicons/react/24/solid';
import { Workout } from '../../types';
import EditModal from './EditModal';

interface Props {
  workout: Workout;
}
const WorkoutCard = ({ workout }: Props) => {
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
    <>
      <div className='bg-zinc-800 rounded-lg mt-2'>
        <p className='text-slate-100 text-sm ml-2 pt-2'>
          {new Date(workout.date).toLocaleDateString('en-GB')}
        </p>
        <div
          className='flex flex-wrap justify-between pt-4 pb-8 px-6 text-slate-100 hover:cursor-pointer sm:px-32 sm:pt-0 sm:pb-6'
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
            <div className='flex justify-end pb-2 px-6'>
              <EditModal workout={workout} />
              {/* TODO: separate into own component -- add delete confirmation prompt */}
              <Button
                onPress={() => handleDelete(workout.id)}
                className='mb-4 p-4 bg-red-400 text-black rounded-full transition ease-linear duration-300 hover:scale-105 hover:bg-red-500 '
              >
                <TrashIcon className='mx-auto h-5 w-5' />
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default WorkoutCard;
