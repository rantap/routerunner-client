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
      <p className='text-slate-100 text-sm ml-2 mt-6 '>
        {new Date(workout.date).toLocaleDateString('en-GB')}
      </p>
      <div
        className='flex flex-wrap justify-between py-4 px-6 bg-zinc-800 text-slate-100 rounded-lg hover:cursor-pointer'
        onClick={() => setExpanded(!isExpanded)}
      >
        {isExpanded ? (
          <ChevronUpIcon className='mt-1 h-5 w-5' />
        ) : (
          <ChevronDownIcon className='mt-1 h-5 w-5' />
        )}
        <p>{workout.type}</p>
        <p>{workout.distance} km</p>
        <p>{formatDuration(workout.duration)}</p>
      </div>
      <div
        className={`${
          isExpanded ? 'opacity-100' : 'opacity-0'
        } transition-opacity ease-linear duration-500`}
      >
        {isExpanded && (
          <div className='flex justify-end'>
            <EditModal workout={workout} />
            {/* TODO: separate into own component -- delete confirmation prompt */}
            <Button
              onPress={() => handleDelete(workout.id)}
              className='mt-4 p-4 bg-red-400 text-black rounded-full transition ease-in-out hover:scale-105 hover:bg-red-500 duration-300'
            >
              <TrashIcon className='mx-auto h-5 w-5' />
            </Button>
          </div>
        )}
      </div>
    </>
  );
};
export default WorkoutCard;
