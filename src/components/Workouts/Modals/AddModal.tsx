import { useState } from 'react';
import {
  Button,
  Dialog,
  DialogTrigger,
  Modal,
  ModalOverlay,
} from 'react-aria-components';
import { XMarkIcon, DocumentPlusIcon } from '@heroicons/react/24/solid';
import AddForm from '../Forms/AddForm';

const AddModal = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <DialogTrigger>
      <Button
        onPress={() => setOpen(true)}
        className='mt-6 flex rounded-full bg-violet-800 px-8 py-3 text-slate-50 shadow-md outline-none hover:bg-violet-900 data-[pressed]:scale-95 data-[focus-visible]:ring data-[focus-visible]:ring-orange-300 dark:bg-green-300 dark:text-zinc-900 dark:hover:bg-green-400 dark:hover:text-zinc-900 lg:mt-0 lg:py-2'
      >
        <DocumentPlusIcon className='mr-2 h-8 w-8' />
        <p className='my-auto tracking-tighter'>Add a workout</p>
      </Button>
      <ModalOverlay
        isDismissable
        isOpen={isOpen}
        onOpenChange={setOpen}
        className='fixed inset-0 top-20 bg-black/50 data-[entering]:animate-fade-in'
      >
        <Modal className='fixed inset-0 top-20 mt-2 overflow-scroll pb-36 pr-8 pt-8 text-left data-[entering]:animate-slide-in data-[exiting]:animate-slide-out sm:mx-auto sm:w-2/5 sm:overflow-hidden sm:pt-6 sm:data-[entering]:animate-zoom sm:data-[exiting]:animate-none lg:w-2/6'>
          <Dialog className='outline-none data-[focus-visible]:ring data-[focus-visible]:ring-orange-300'>
            <Button
              className='absolute right-0 mx-14 my-3 outline-none data-[focus-visible]:ring data-[focus-visible]:ring-orange-300'
              onPress={() => setOpen(false)}
            >
              <XMarkIcon className='h-10 w-10 text-zinc-900 dark:text-slate-100' />
            </Button>
            <AddForm setOpen={setOpen} />
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
};
export default AddModal;
