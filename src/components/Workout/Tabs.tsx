import { Tab, TabList, TabPanel, Tabs } from 'react-aria-components';
import CardList from './CardList';

const WorkoutTabs = () => {
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
        <CardList />
      </TabPanel>
      <TabPanel id='Totals'>
        <p className='text-slate-100'>Total calculations</p>
      </TabPanel>
    </Tabs>
  );
};
export default WorkoutTabs;
