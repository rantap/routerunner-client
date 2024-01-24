import Map from '../components/Map';

const Routeplanner = () => {
  return (
    <>
      <h1 className='m-6 text-center text-slate-100 text-xl font-bold tracking-tighter'>
        Create a route
      </h1>
      <p className='mx-6 mb-6 text-center text-slate-100'>
        Plan your own route by creating waypoints on the map. Touch/click the desired spot to create
        a waypoint. Touch/click a waypoint to remove it.
      </p>
      <Map />
    </>
  );
};
export default Routeplanner;
