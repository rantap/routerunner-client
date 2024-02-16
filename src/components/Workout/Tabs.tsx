import { Tab, TabList, TabPanel, Tabs } from 'react-aria-components';

import CardList from './CardList';

const WorkoutTabs = () => {
  return (
    <Tabs className='text-slate-300'>
      <TabList className='flex justify-around mb-4 ' aria-label='Workouts'>
        <Tab
          className='p-2 border-solid border-2 border-transparent outline-none hover:cursor-pointer data-[selected]:border-b-green-300 data-[selected]:text-slate-100 data-[focus-visible]:outline-2 data-[focus-visible]:outline-slate-100 data-[focus-visible]:outline-solid'
          id='All'
        >
          All workouts
        </Tab>
        <Tab
          className='p-2 border-solid border-2 border-transparent outline-none hover:cursor-pointer data-[selected]:border-b-green-300 data-[selected]:text-slate-100 data-[focus-visible]:outline-2 data-[focus-visible]:outline-slate-100 data-[focus-visible]:outline-solid'
          id='Totals'
        >
          Totals
        </Tab>
      </TabList>
      <TabPanel id='All'>
        <CardList />
      </TabPanel>
      <TabPanel id='Totals' className=''>
        <p className='text-slate-100'>Total calculations</p>
      </TabPanel>
    </Tabs>
  );
};
export default WorkoutTabs;
