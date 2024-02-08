import { useState } from 'react';
import { Button, Dialog, DialogTrigger, Modal, ModalOverlay } from 'react-aria-components';
import { XMarkIcon, PencilSquareIcon } from '@heroicons/react/24/solid';
import EditForm from './Forms/EditForm';
import { Workout } from '../../types';

interface Props {
  workout: Workout;
}

const EditModal = ({ workout }: Props) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <DialogTrigger>
      <Button
        onPress={() => setOpen(true)}
        className='mt-4 p-4 mr-4 bg-yellow-300 text-black rounded-full transition ease-in-out hover:scale-105 hover:bg-yellow-400 duration-300'
      >
        <PencilSquareIcon className='mx-auto h-5 w-5' />
      </Button>
      <ModalOverlay
        isDismissable
        isOpen={isOpen}
        onOpenChange={setOpen}
        className='fixed top-20 inset-0 bg-black/50'
      >
        <Modal className='fixed top-20 inset-0 pt-8 pb-10 w-full text-left overflow-scroll sm:w-2/5 sm:mx-auto sm:overflow-hidden'>
          <Dialog>
            <Button className='absolute right-0 my-3 mx-6' onPress={() => setOpen(false)}>
              <XMarkIcon className='h-10 w-10 text-slate-100' />
            </Button>
            <EditForm workout={workout} />
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
};
export default EditModal;
