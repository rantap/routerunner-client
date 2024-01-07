import { useState } from 'react';
import { ToggleButton } from 'react-aria-components';
import { Bars2Icon } from '@heroicons/react/24/solid';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((open) => !open);
  };

  return (
    <nav className='sticky top-0 left-0 w-screen z-50 bg-zinc-800 drop-shadow-lg text-slate-100 sm:h-20 sm:flex sm:items-center'>
      <div className='flex p-4 items-center justify-between'>
        <h1 className='text-3xl font-bold tracking-tighter sm:ml-4'>Routerunner</h1>
        <div className='sm:hidden'>
          <ToggleButton
            className='text-3xl m-2 cursor-pointer sm:hover:text-green-300'
            onChange={toggleDrawer}
          >
            {!isOpen ? <Bars2Icon className='h-10 w-10 ' /> : <XMarkIcon className='h-10 w-10' />}
          </ToggleButton>
        </div>
      </div>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } fixed w-9/12 h-screen bg-zinc-800 sm:flex sm:h-fit sm:static sm:ml-4`}
      >
        <NavLink
          to='/'
          onClick={toggleDrawer}
          className='block py-2 px-4 hover:text-green-300 sm:mt-0 sm:py-6 sm:font-semibold sm:border-b-2 sm:border-zinc-800 sm:hover:border-b-2 sm:hover:border-green-300'
        >
          Create a route
        </NavLink>
        <NavLink
          to='/workouts'
          onClick={toggleDrawer}
          className='block mt-1 py-2 px-4 hover:text-green-300 sm:mt-0 sm:py-6 sm:font-semibold sm:border-b-2 sm:border-zinc-800 sm:hover:border-b-2 sm:hover:border-green-300'
        >
          Your workouts
        </NavLink>
      </div>
    </nav>
  );
};
export default Navbar;
