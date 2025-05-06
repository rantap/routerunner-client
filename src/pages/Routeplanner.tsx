import { HelpButton } from '../components/Map/Help/HelpButton';
import Map from '../components/Map/Map';

const Routeplanner = () => {
  return (
    <>
      <div className='my-6 flex justify-center lg:mb-0 lg:hidden'>
        <h1 className='mr-2 text-2xl font-bold tracking-tighter'>
          Create a route
        </h1>
        <HelpButton />
      </div>
      <Map />
    </>
  );
};
export default Routeplanner;
