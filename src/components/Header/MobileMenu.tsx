import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { DialogTrigger, Button, ModalOverlay, Modal, Dialog } from 'react-aria-components';
import { NavLink } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle/ThemeToggle';

const MobileMenu = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <DialogTrigger>
      <Button
        className='text-3xl m-2 sm:hidden outline-none data-[focus-visible]:outline-2 data-[focus-visible]:outline-slate-100 data-[focus-visible]:outline-solid'
        onPress={() => setOpen(!isOpen)}
      >
        {!isOpen ? <Bars2Icon className='h-10 w-10' /> : <XMarkIcon className='h-10 w-10' />}
      </Button>
      <ModalOverlay
        isDismissable
        isOpen={isOpen}
        onOpenChange={setOpen}
        className='z-50 top-[5.5rem] fixed inset-0 text-xl text-slate-100 backdrop-blur bg-black/50 data-[entering]:animate-blur-in data-[exiting]:animate-blur-out'
      >
        <Modal className='z-50 fixed  w-9/12 h-screen bg-zinc-800 data-[entering]:animate-slide-in data-[exiting]:animate-slide-out'>
          <Dialog className='outline-none data-[focus-visible]:outline-solid data-[focus-visible]:outline-2 data-[focus-visible]:outline-slate-100'>
            <NavLink
              to='/'
              onClick={() => setOpen(false)}
              className='block mt-1 py-2 px-6 hover:text-green-300 outline-none focus-visible:outline-2 focus-visible:outline-slate-100 focus-visible:outline-solid'
            >
              My workouts
            </NavLink>
            <NavLink
              to='/routeplanner'
              onClick={() => setOpen(false)}
              className='block mt-2 py-2 px-6 hover:text-green-300 outline-none focus-visible:outline-2 focus-visible:outline-slate-100 focus-visible:outline-solid'
            >
              Create a route
            </NavLink>
            <div className='block mt-2 py-2 px-2'>
              <ThemeToggle />
            </div>
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
};
export default MobileMenu;
