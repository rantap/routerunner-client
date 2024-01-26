import AddWorkoutForm from '../components/Workout/Forms/AddWorkoutForm';
import WorkoutModal from '../components/Workout/WorkoutModal';
import WorkoutTabs from '../components/Workout/WorkoutTabs';

const Workouts = () => {
  return (
    <div className='mb-10'>
      <div>
        <h1 className='mt-6 text-center text-slate-100 text-2xl font-bold tracking-tighter'>
          Your workouts
        </h1>
      </div>
      <div className='flex justify-center sm:hidden'>
        <WorkoutModal />
      </div>
      <div className='flex flex-wrap'>
        <div className='mx-auto mt-4 w-5/6 sm:w-2/5'>
          <WorkoutTabs />
        </div>
        <div className='hidden mx-auto mt-8 w-5/6 sm:w-2/5 sm:block'>
          <AddWorkoutForm />
        </div>
      </div>
    </div>
  );
};
export default Workouts;
