import { useQuery } from '@tanstack/react-query';
import { Workout } from '../../types';
import { fetchWorkouts } from '../../api/workouts';
import WorkoutCard from './WorkoutCard';

const WorkoutList = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['workouts'],
    queryFn: fetchWorkouts,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <>
      {data?.map((workout: Workout) => (
        <WorkoutCard key={workout.id} workout={workout} />
      ))}
    </>
  );
};
export default WorkoutList;
