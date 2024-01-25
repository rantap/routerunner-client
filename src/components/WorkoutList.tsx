import WorkoutCard from './WorkoutCard';

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

  return (
    <>
      {workouts.map((workout) => (
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
