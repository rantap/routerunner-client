import { NavLink } from 'react-router-dom';
import { ThemeSwitch } from '../UI/ThemeSwitch/ThemeSwitch';
import MobileMenu from './MobileMenu';

type Props = {
  onToggle: (isDark: boolean) => void;
  isDark: boolean;
};

const Navbar = ({ onToggle, isDark }: Props) => {
  return (
    <nav className='sticky left-0 right-0 top-0 z-50 w-screen bg-slate-100 text-zinc-800 drop-shadow-lg dark:bg-zinc-800 dark:text-slate-100 sm:flex sm:h-20 sm:w-full sm:items-center'>
      <div className='flex items-center justify-between p-4'>
        <h1 className='ml-2 text-3xl font-bold tracking-tighter sm:ml-10'>
          Routerunner
        </h1>
        {/* MOBILE MENU */}
        <MobileMenu onToggle={onToggle} isDark={isDark} />
      </div>
      {/* DESKTOP MENU */}
      <div className='hidden sm:static sm:ml-4 sm:flex sm:h-fit'>
        <NavLink
          to='/'
          className={({ isActive }) =>
            `block border-b-2 border-transparent p-6 font-semibold hover:border-b-zinc-800 dark:hover:border-b-slate-100 ${
              isActive ? 'border-b-zinc-800 dark:border-b-slate-100' : ''
            }`
          }
        >
          My workouts
        </NavLink>
        <NavLink
          to='/routeplanner'
          className={({ isActive }) =>
            `block border-b-2 border-transparent p-6 font-semibold hover:border-b-zinc-800 dark:hover:border-b-slate-100 ${
              isActive ? 'border-b-zinc-800 dark:border-b-slate-100' : ''
            }`
          }
        >
          Create a route
        </NavLink>
        <ThemeSwitch onToggle={onToggle} isDark={isDark} />
      </div>
    </nav>
  );
};
export default Navbar;
