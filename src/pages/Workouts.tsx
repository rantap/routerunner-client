import Tabs from '../components/Workouts/Tabs';
type Props = {
  isDark: boolean;
};
const Workouts = ({ isDark }: Props) => {
  return (
    <div className='mb-10 h-full xl:mx-10'>
      <div>
        <h1 className='mt-6 text-center text-2xl font-bold tracking-tighter lg:hidden'>
          My workouts
        </h1>
      </div>
      <div className='flex flex-wrap lg:hidden'>
        <div className='mx-auto mt-4 w-5/6 sm:w-3/5'>
          <Tabs isDark={isDark} />
        </div>
      </div>
      <div className='mx-8 hidden flex-col gap-16 lg:mt-6 lg:flex'>
        <div>
          <Tabs isDark={isDark} />
        </div>
      </div>
    </div>
  );
};
export default Workouts;
