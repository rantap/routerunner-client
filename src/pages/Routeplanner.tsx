import { HelpButton } from '../components/Map/Help/HelpButton';
import Map from '../components/Map/Map';

const Routeplanner = () => {
  return (
    <>
      <div className='flex justify-center my-6 lg:mb-0'>
        <h1 className='mr-2 text-slate-100 text-2xl font-bold tracking-tighter'>Create a route</h1>
        <HelpButton />
      </div>
      <Map />
    </>
  );
};
export default Routeplanner;
