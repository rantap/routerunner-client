import { Tabs, TabList, Tab, TabPanel } from 'react-aria-components';
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
    <Tabs className='text-slate-300'>
      <TabList className='flex justify-around mb-4 ' aria-label='Workouts'>
        <Tab
          className='p-2 border-solid border-2 border-transparent hover:cursor-pointer data-[selected]:border-b-green-300 data-[selected]:text-slate-100'
          id='All'
        >
          All workouts
        </Tab>
        <Tab
          className='p-2 border-solid border-2 border-transparent hover:cursor-pointer data-[selected]:border-b-green-300 data-[selected]:text-slate-100'
          id='Totals'
        >
          Totals
        </Tab>
      </TabList>
      <TabPanel id='All'>
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
      </TabPanel>
      <TabPanel id='Totals'>
        <p className='text-slate-100'>Total calculations</p>
      </TabPanel>
    </Tabs>
  );
};
export default WorkoutList;
