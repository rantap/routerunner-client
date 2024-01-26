import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { DialogTrigger, Button, ModalOverlay, Modal, Dialog } from 'react-aria-components';
import { NavLink } from 'react-router-dom';

const MobileMenu = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <DialogTrigger>
      <Button
        className='text-3xl m-2 cursor-pointer sm:hover:text-green-300 sm:hidden'
        onPress={() => setOpen(!isOpen)}
      >
        {!isOpen ? <Bars2Icon className='h-10 w-10' /> : <XMarkIcon className='h-10 w-10' />}
      </Button>
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
  );
};
export default MobileMenu;
