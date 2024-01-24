import AddWorkoutForm from '../components/AddWorkoutForm';
import WorkoutList from '../components/WorkoutList';
import WorkoutModal from '../components/WorkoutModal';

const Workouts = () => {
  return (
    <div className='mb-10'>
      <div>
        <h1 className='mt-6 text-center text-slate-100 text-xl font-bold tracking-tighter'>
          Your workouts
        </h1>
      </div>
      <div className='mt-4 flex justify-center sm:hidden'>
        <WorkoutModal />
      </div>
      <div className='flex flex-wrap mt-4'>
        <div className='mx-auto mt-4 w-5/6 sm:w-2/5'>
          <WorkoutList />
        </div>
        <div className='hidden mx-auto mt-10 w-5/6 sm:w-2/5 sm:block'>
          <AddWorkoutForm />
        </div>
      </div>
    </div>
  );
};
export default Workouts;
