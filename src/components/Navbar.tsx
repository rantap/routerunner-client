import { useState } from 'react';
import { Button, Dialog, DialogTrigger, Modal, ModalOverlay } from 'react-aria-components';
import { Bars2Icon } from '@heroicons/react/24/solid';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className='z-50 sticky top-0 left-0 w-screen bg-zinc-800 text-slate-100 sm:h-20 sm:flex sm:items-center'>
      <div className='flex p-4 items-center justify-between'>
        <h1 className='ml-2 text-3xl font-bold tracking-tighter sm:ml-4'>Routerunner</h1>
        <Button
          className='text-3xl m-2 cursor-pointer sm:hover:text-green-300 sm:hidden'
          onPress={() => setOpen(!isOpen)}
        >
          {!isOpen ? <Bars2Icon className='h-10 w-10' /> : <XMarkIcon className='h-10 w-10' />}
        </Button>
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
      {/* MOBILE MENU */}
      <DialogTrigger>
        <ModalOverlay
          isDismissable
          isOpen={isOpen}
          onOpenChange={setOpen}
          className='z-50 top-[5.5rem] fixed inset-0 text-xl text-slate-100 backdrop-contrast-75'
        >
          <Modal className='z-50 fixed  w-9/12 h-screen bg-zinc-800'>
            <Dialog>
              <NavLink
                to='/'
                onClick={() => setOpen(false)}
                className='block mt-1 py-2 px-6 hover:text-green-300'
              >
                Your workouts
              </NavLink>
              <NavLink
                to='/routeplanner'
                onClick={() => setOpen(false)}
                className='block mt-2 py-2 px-6 hover:text-green-300 '
              >
                Create a route
              </NavLink>
            </Dialog>
          </Modal>
        </ModalOverlay>
      </DialogTrigger>
    </nav>
  );
};
export default Navbar;
