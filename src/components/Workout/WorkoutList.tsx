//import { useFetch } from '../../hooks/useFetch';
import WorkoutCard from './WorkoutCard';

interface Workout {
  id: number;
  type: string;
  date: string;
  length: string;
  time: number;
}

const WorkoutList = () => {
  const workouts = [
    {
      id: 1,
      type: 'Running',
      date: '2023-10-05T14:48:00.000Z',
      length: '15.02',
      time: 3600,
    },
    {
      id: 2,
      type: 'Walking',
      date: '2023-10-05T14:48:00.000Z',
      length: '15.02',
      time: 3600,
    },
    {
      id: 3,
      type: 'Running',
      date: '2023-10-05T14:48:00.000Z',
      length: '15.02',
      time: 2400,
    },
  ];
  /* const { data, loading, error } = useFetch<Workout[]>('http://localhost:3001/workouts');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>; */

  return (
    <>
      {workouts?.map((workout: Workout) => (
        <WorkoutCard
          key={workout.id}
          id={workout.id}
          type={workout.type}
          date={workout.date}
          length={workout.length}
          time={workout.time}
        />
      ))}
    </>
  );
};
export default WorkoutList;
