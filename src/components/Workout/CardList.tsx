import { useQuery } from '@tanstack/react-query';
import { Workout } from '../../types';
import { fetchWorkouts } from '../../api/workouts';
import Card from './Card';
import { Spinner } from '../UI/Spinner';
import { sortByDate } from '../../utils/sortByDate';

const CardList = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['workouts'],
    queryFn: fetchWorkouts,
  });

  if (isError) return <p>Error: {error.message}</p>;
  const workouts = data ? sortByDate(data) : [];

  return (
    <>
      {isLoading ? (
        <div className='text-center m-12'>
          <Spinner />
          <p className='mt-6'>Please wait while the web service spins up...</p>
        </div>
      ) : (
        <>
          {workouts.map((workout: Workout) => (
            <Card key={workout.id} workout={workout} />
          ))}
        </>
      )}
    </>
  );
};
export default CardList;
