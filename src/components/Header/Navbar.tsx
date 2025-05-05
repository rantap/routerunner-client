import { NavLink } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle/ThemeToggle';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  return (
    <nav className='z-50 sticky top-0 left-0 right-0 w-screen bg-slate-100 text-zinc-800 dark:bg-zinc-800 dark:text-slate-100 drop-shadow-lg sm:h-20 sm:flex sm:items-center sm:w-full'>
      <div className='flex p-4 items-center justify-between'>
        <h1 className='ml-2 text-3xl font-bold tracking-tighter sm:ml-10'>Routerunner</h1>
        {/* MOBILE MENU */}
        <MobileMenu />
      </div>
      {/* DESKTOP MENU */}
      <div className='hidden sm:flex sm:h-fit sm:static sm:ml-4'>
        <NavLink
          to='/'
          className={({ isActive }) =>
            `block p-6 font-semibold border-b-2 border-transparent hover:border-b-zinc-800 dark:hover:border-b-slate-100  ${
              isActive ? 'border-b-zinc-800 dark:border-b-slate-100' : ''
            }`
          }
        >
          My workouts
        </NavLink>
        <NavLink
          to='/routeplanner'
          className={({ isActive }) =>
            `block p-6 font-semibold border-b-2 border-transparent hover:border-b-zinc-800 dark:hover:border-b-slate-100 ${
              isActive ? 'border-b-zinc-800 dark:border-b-slate-100' : ''
            }`
          }
        >
          Create a route
        </NavLink>
        <ThemeToggle />
      </div>
    </nav>
  );
};
export default Navbar;
