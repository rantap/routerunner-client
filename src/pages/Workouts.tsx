import AllWorkouts from '../components/Workouts/AllWorkouts';
import AddModal from '../components/Workouts/Modals/AddModal';
import Tabs from '../components/Workouts/Tabs';
import Totals from '../components/Workouts/Totals';

const Workouts = () => {
  return (
    <div className='mb-10 xl:mx-10'>
      <div>
        <h1 className='mt-6 text-center text-slate-100 text-2xl font-bold tracking-tighter'>
          My workouts
        </h1>
      </div>
      <div className='flex flex-wrap lg:hidden'>
        <div className='mx-auto mt-4 w-5/6 sm:w-3/5'>
          <Tabs />
        </div>
      </div>
      <div className='hidden lg:flex flex-col gap-16 mx-8 mt-4 text-slate-100 lg:mt-0'>
        <div>
          <div className='flex justify text-zinc-900'>
            <AddModal />
          </div>
          <AllWorkouts />
        </div>
        <div className='w-1/2'>
          <h2 className='mt-4 mb-8 text-center text-lg font-bold tracking-widest'>Totals</h2>
          <Totals />
        </div>
      </div>
    </div>
  );
};
export default Workouts;
