import { useState } from 'react';
import { Button } from 'react-aria-components';
import { ChevronUpIcon } from '@heroicons/react/24/solid';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { formatDuration } from '../../utils/formatDuration';
import { Workout } from '../../types';

interface Props {
  workout: Workout;
}
const WorkoutCard = ({ workout }: Props) => {
  const [isExpanded, setExpanded] = useState(false);

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
          <div className='flex justify-center mx-8 lg:mx-16 xl:mx-32'>
            <Button className='w-full mt-4 py-2 px-6 mr-4 bg-red-400 text-black rounded-full transition ease-in-out hover:scale-105 hover:bg-red-500 duration-300'>
              Delete
            </Button>
            <Button className='w-full mt-4 py-2 px-6 bg-yellow-300 text-black rounded-full transition ease-in-out hover:scale-105 hover:bg-yellow-400 duration-300'>
              Edit
            </Button>
          </div>
        )}
      </div>
    </>
  );
};
export default WorkoutCard;
