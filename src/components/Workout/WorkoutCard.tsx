import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteWorkout } from '../../api/workouts';
import { formatDuration } from '../../utils/formatDuration';
import { Button } from 'react-aria-components';
import { ChevronUpIcon } from '@heroicons/react/24/solid';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
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
      <p className='text-slate-100 text-sm mt-6'>
        {new Date(workout.date).toLocaleDateString('en-EN', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>
      <div
        className='flex flex-wrap justify-between p-4 bg-zinc-800 text-slate-100 rounded-lg hover:cursor-pointer'
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
          <div className='flex justify-start mx-8 sm:mx-32 xl:mx-48'>
            <EditModal />
            <Button
              onPress={() => handleDelete(workout.id)}
              className='w-full mt-4 py-2 px-6  bg-red-400 text-black rounded-full transition ease-in-out hover:scale-105 hover:bg-red-500 duration-300'
            >
              Delete
            </Button>
          </div>
        )}
      </div>
    </>
  );
};
export default WorkoutCard;
