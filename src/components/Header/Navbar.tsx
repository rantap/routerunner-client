import { NavLink } from 'react-router-dom';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  return (
    <nav className='z-50 sticky top-0 left-0 w-screen bg-zinc-800 text-slate-100 drop-shadow-lg sm:h-20 sm:flex sm:items-center'>
      <div className='flex p-4 items-center justify-between'>
        <h1 className='ml-2 text-3xl font-bold tracking-tighter sm:ml-4'>Routerunner</h1>
        {/* MOBILE MENU */}
        <MobileMenu />
      </div>
      {/* DESKTOP MENU */}
      <div className='hidden sm:flex sm:h-fit sm:static sm:ml-4'>
        <NavLink
          to='/'
          className='block p-6 hover:text-green-300 font-semibold border-b-2 border-zinc-800  hover:border-green-300'
        >
          Your workouts
        </NavLink>
        <NavLink
          to='/routeplanner'
          className='block p-6 hover:text-green-300 font-semibold border-b-2 border-transparent hover:border-green-300 active:border-green-300'
        >
          Create a route
        </NavLink>
      </div>
    </nav>
  );
};
export default Navbar;
