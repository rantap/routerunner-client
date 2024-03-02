import { useState } from 'react';
import { Button, Dialog, DialogTrigger, Modal, ModalOverlay } from 'react-aria-components';
import { XMarkIcon, PencilSquareIcon } from '@heroicons/react/24/solid';
import EditForm from '../Forms/EditForm';
import { Workout } from '../../../types';

interface Props {
  workout: Workout;
}

const EditModal = ({ workout }: Props) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <DialogTrigger>
      <Button
        onPress={() => setOpen(true)}
        className='mb-4 mr-4 p-4 bg-yellow-300 text-black rounded-full hover:bg-yellow-400 outline-none data-[focus-visible]:ring data-[focus-visible]:ring-orange-300 data-[pressed]:scale-95'
        aria-label='edit'
      >
        <PencilSquareIcon className='mx-auto h-5 w-5' />
      </Button>
      <ModalOverlay
        isDismissable
        isOpen={isOpen}
        onOpenChange={setOpen}
        className='fixed top-20 inset-0 bg-black/50 data-[entering]:animate-fade-in'
      >
        <Modal className='fixed top-20 inset-0 mt-2 pr-8 pt-8 pb-36 text-left data-[entering]:animate-slide-in data-[exiting]:animate-slide-out sm:w-2/5 lg:w-2/6 sm:mx-auto sm:pt-6 sm:overflow-hidden sm:data-[entering]:animate-zoom sm:data-[exiting]:animate-none'>
          <Dialog className='outline-none data-[focus-visible]:ring data-[focus-visible]:ring-orange-300'>
            <Button
              className='absolute right-0 mx-14 my-3 outline-none data-[focus-visible]:ring data-[focus-visible]:ring-orange-300'
              onPress={() => setOpen(false)}
            >
              <XMarkIcon className='h-10 w-10 text-slate-100' />
            </Button>
            <EditForm setOpen={setOpen} workout={workout} />
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
};
export default EditModal;
