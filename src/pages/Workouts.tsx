import CardList from '../components/Workouts/Cards/CardList';
import AddModal from '../components/Workouts/Modals/AddModal';
import Tabs from '../components/Workouts/Tabs';
import Totals from '../components/Workouts/Totals';

const Workouts = () => {
  return (
    <div className='mb-10 xl:mx-20'>
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
      <div className='hidden lg:flex flex-row gap-32 mx-16 mt-4 text-slate-100'>
        <div className='basis-1/2'>
          <div className='flex justify-center mb-4 text-zinc-900'>
            <AddModal />
          </div>
          <CardList />
        </div>
        <div className='basis-1/2'>
          <h2 className='mt-4 mb-6 text-center text-lg font-bold tracking-widest'>Totals</h2>
          <Totals />
        </div>
      </div>
    </div>
  );
};
export default Workouts;
