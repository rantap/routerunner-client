import AddModal from '../components/Workouts/Modals/AddModal';
import Tabs from '../components/Workouts/Tabs';

const Workouts = () => {
  return (
    <div className='mb-10 xl:mx-10'>
      <div>
        <h1 className='mt-6 text-center text-2xl font-bold tracking-tighter lg:hidden'>
          My workouts
        </h1>
      </div>
      <div className='flex flex-wrap lg:hidden'>
        <div className='mx-auto mt-4 w-5/6 sm:w-3/5'>
          <Tabs />
        </div>
      </div>
      <div className='mx-8 hidden flex-col gap-16 lg:mt-6 lg:flex'>
        <div>
          <div className='justify flex text-zinc-900'>
            <AddModal />
          </div>
          <Tabs />
        </div>
      </div>
    </div>
  );
};
export default Workouts;
