import { useState } from 'react';
import { Button } from 'react-aria-components';

interface Workout {
  id: number;
  type: string;
  date: string;
  length: string;
  time: number;
}
const WorkoutCard = ({ id, type, date, length, time }: Workout) => {
  const [isExpanded, setIsExpanded] = useState(false);

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
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <p>{id}</p>
        <p>{type}</p>
        <p>{length} km</p>
        <p>{new Date(time * 1000).toISOString().slice(11, 19)}</p>
      </div>
      {isExpanded && (
        <div className=''>
          <Button className='mt-4 py-2 px-6 mr-8 bg-red-700 text-black rounded'>Delete</Button>
          <Button className='mt-4 py-2 px-6 bg-yellow-300 text-black rounded'>Edit</Button>
        </div>
      )}
    </>
  );
};
export default WorkoutCard;
