import { Tab, TabList, TabPanel, Tabs } from 'react-aria-components';
import Totals from './Totals';
import AddModal from './Modals/AddModal';
import AllWorkouts from './AllWorkouts';

const WorkoutTabs = () => {
  return (
    <Tabs className='text-slate-500 dark:text-slate-300'>
      <TabList
        className='mb-2 flex justify-around border-b border-slate-300 dark:border-zinc-700 lg:mx-auto lg:w-1/3'
        aria-label='Workouts'
      >
        <Tab
          className='border-2 border-solid border-transparent p-2 outline-none hover:cursor-pointer data-[selected]:border-b-violet-800 data-[selected]:text-zinc-900 data-[focus-visible]:ring data-[focus-visible]:ring-orange-300 dark:data-[selected]:border-b-green-300 dark:data-[selected]:text-slate-50'
          id='All'
        >
          All workouts
        </Tab>
        <Tab
          className='border-2 border-solid border-transparent p-2 outline-none hover:cursor-pointer data-[selected]:border-b-violet-800 data-[selected]:text-zinc-900 data-[focus-visible]:ring data-[focus-visible]:ring-orange-300 dark:data-[selected]:border-b-green-300 dark:data-[selected]:text-slate-50'
          id='Totals'
        >
          Totals
        </Tab>
      </TabList>
      <TabPanel id='All'>
        <div className='mb-4 flex justify-center text-zinc-900 lg:hidden'>
          <AddModal />
        </div>
        <AllWorkouts />
      </TabPanel>
      <TabPanel id='Totals' className='mt-6'>
        <Totals />
      </TabPanel>
    </Tabs>
  );
};
export default WorkoutTabs;
