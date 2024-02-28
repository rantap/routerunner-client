import { Tab, TabList, TabPanel, Tabs } from 'react-aria-components';
import CardList from './Cards/CardList';
import Totals from './Totals';
import AddModal from './Modals/AddModal';

const WorkoutTabs = () => {
  return (
    <Tabs className='text-slate-300'>
      <TabList className='flex justify-around mb-2 border-b border-zinc-800' aria-label='Workouts'>
        <Tab
          className='p-2 border-solid border-2 border-transparent outline-none hover:cursor-pointer data-[selected]:border-b-green-300 data-[selected]:text-slate-100 data-[focus-visible]:ring data-[focus-visible]:ring-orange-300'
          id='All'
        >
          All workouts
        </Tab>
        <Tab
          className='p-2 border-solid border-2 border-transparent outline-none hover:cursor-pointer data-[selected]:border-b-green-300 data-[selected]:text-slate-100 data-[focus-visible]:ring data-[focus-visible]:ring-orange-300'
          id='Totals'
        >
          Totals
        </Tab>
      </TabList>
      <TabPanel id='All'>
        <div className='flex justify-center mb-4 text-zinc-900'>
          <AddModal />
        </div>
        <CardList />
      </TabPanel>
      <TabPanel id='Totals' className='mt-6'>
        <Totals />
      </TabPanel>
    </Tabs>
  );
};
export default WorkoutTabs;
