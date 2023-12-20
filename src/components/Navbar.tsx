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
    <nav className='bg-gray-700'>
      <div className='flex items-center justify-between px-4 py-3'>
        <div>
          <h3>Routerunner</h3>
        </div>
        <div>
          <ToggleButton
            className='text-3xl cursor-pointer mx-2 md:hidden block'
            onChange={toggleDrawer}
          >
            {!isOpen ? <Bars2Icon className='h-10 w-10' /> : <XMarkIcon className='h-10 w-10' />}
          </ToggleButton>
        </div>
      </div>

      {isOpen && (
        <div className='px-4 pt-2 pb-4'>
          <NavLink
            to='/'
            onClick={toggleDrawer}
            className='block px-2 py-1 rounded hover:bg-gray-800'
          >
            Create a route
          </NavLink>
          <NavLink
            to='/workouts'
            onClick={toggleDrawer}
            className='mt-1 px-2 py-1 rounded block hover:bg-gray-800'
          >
            Workouts
          </NavLink>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
