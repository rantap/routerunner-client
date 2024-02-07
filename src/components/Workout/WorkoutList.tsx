import { useQuery } from '@tanstack/react-query';
import { Workout } from '../../types';
import { fetchWorkouts } from '../../api/workouts';
import WorkoutCard from './WorkoutCard';
import { Spinner } from '../UI/Spinner';

const WorkoutList = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['workouts'],
    queryFn: fetchWorkouts,
  });

  if (isError) return <p>Error: {error.message}</p>;

  return (
    <>
      {isLoading ? (
        <div className='text-center m-12'>
          <Spinner />
          <p className='mt-6'>Please wait while the web service spins up...</p>
        </div>
      ) : (
        <>
          {data?.map((workout: Workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </>
      )}
    </>
  );
};
export default WorkoutList;
