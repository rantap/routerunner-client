import AddModal from '../components/Workouts/Modals/AddModal';
import Tabs from '../components/Workouts/Tabs';

const Workouts = () => {
  return (
    <div className='mb-10 xl:mx-20'>
      <div>
        <h1 className='mt-6 text-center text-slate-100 text-2xl font-bold tracking-tighter sm:mb-6'>
          My workouts
        </h1>
      </div>
      <div className='flex justify-center'>
        <AddModal />
      </div>
      <div className='flex flex-wrap'>
        <div className='mx-auto mt-4 w-5/6 sm:w-3/5'>
          <Tabs />
        </div>
      </div>
    </div>
  );
};
export default Workouts;
