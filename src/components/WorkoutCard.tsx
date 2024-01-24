import { useState } from 'react';
import { Button } from 'react-aria-components';
import { ChevronUpIcon } from '@heroicons/react/24/solid';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

interface Workout {
  id: number;
  type: string;
  date: string;
  length: string;
  time: number;
}
const WorkoutCard = ({ type, date, length, time }: Workout) => {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <>
      <p className='text-slate-100 text-sm mt-6'>
        {new Date(date).toLocaleDateString('en-EN', {
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
          <ChevronUpIcon className='mt-1 h-5 w-5 transition-all duration-300 ease-in' />
        ) : (
          <ChevronDownIcon className='mt-1 h-5 w-5 animation-spin' />
        )}
        <p>{type}</p>
        <p>{length} km</p>
        <p>{new Date(time * 1000).toISOString().slice(11, 19)}</p>
      </div>
      {isExpanded && (
        <div className='flex justify-center transition duration-1000 ease-in-out'>
          <Button className='mt-4 py-2 px-6 mr-4 bg-red-400 text-black rounded-full transition ease-in-out hover:scale-105 hover:bg-red-500 duration-300'>
            Delete
          </Button>
          <Button className='mt-4 py-2 px-6 bg-yellow-300 text-black rounded-full transition ease-in-out hover:scale-105 hover:bg-yellow-400 duration-300'>
            Edit
          </Button>
        </div>
      )}
    </>
  );
};
export default WorkoutCard;
