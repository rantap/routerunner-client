import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import {
  DialogTrigger,
  Button,
  ModalOverlay,
  Modal,
  Dialog,
} from 'react-aria-components';
import { NavLink } from 'react-router-dom';
import { ThemeSwitch } from '../UI/ThemeSwitch/ThemeSwitch';
type Props = {
  onToggle: (isDark: boolean) => void;
  isDark: boolean;
};
const MobileMenu = ({ onToggle, isDark }: Props) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <DialogTrigger>
      <Button
        className='data-[focus-visible]:outline-solid m-2 text-3xl outline-none data-[focus-visible]:outline-2 data-[focus-visible]:outline-slate-100 sm:hidden'
        onPress={() => setOpen(!isOpen)}
      >
        {!isOpen ? (
          <Bars2Icon className='h-10 w-10' />
        ) : (
          <XMarkIcon className='h-10 w-10' />
        )}
      </Button>
      <ModalOverlay
        isDismissable
        isOpen={isOpen}
        onOpenChange={setOpen}
        className='fixed inset-0 top-[5.5rem] z-50 bg-black/50 text-xl text-zinc-900 backdrop-blur data-[entering]:animate-blur-in data-[exiting]:animate-blur-out dark:text-slate-100'
      >
        <Modal className='fixed z-50 h-screen w-9/12 bg-slate-100 data-[entering]:animate-slide-in data-[exiting]:animate-slide-out dark:bg-zinc-800'>
          <Dialog className='data-[focus-visible]:outline-solid outline-none data-[focus-visible]:outline-2 data-[focus-visible]:outline-slate-100'>
            <NavLink
              to='/'
              onClick={() => setOpen(false)}
              className='focus-visible:outline-solid mt-1 block px-6 py-2 outline-none hover:text-violet-800 focus-visible:outline-2 focus-visible:outline-slate-100 dark:hover:text-green-300'
            >
              My workouts
            </NavLink>
            <NavLink
              to='/routeplanner'
              onClick={() => setOpen(false)}
              className='focus-visible:outline-solid mt-2 block px-6 py-2 outline-none hover:text-violet-800 focus-visible:outline-2 focus-visible:outline-slate-100 dark:hover:text-green-300'
            >
              Create a route
            </NavLink>
            <div className='mt-2 block px-2 py-2'>
              <ThemeSwitch onToggle={onToggle} isDark={isDark} />
            </div>
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
};
export default MobileMenu;
