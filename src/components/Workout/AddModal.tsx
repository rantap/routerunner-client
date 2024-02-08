import { useState } from 'react';
import { Button, Dialog, DialogTrigger, Modal, ModalOverlay } from 'react-aria-components';
import { XMarkIcon, DocumentPlusIcon } from '@heroicons/react/24/solid';
import AddForm from './Forms/AddForm';

const AddModal = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <DialogTrigger>
      <Button
        onPress={() => setOpen(true)}
        className='flex mt-6 px-8 py-4 bg-green-300 rounded-full transition ease-in-out hover:scale-105 hover:bg-green-400 duration-300'
      >
        <DocumentPlusIcon className='h-8 w-8 mr-2' />
        <p className='my-auto tracking-tighter'>Add a workout</p>
      </Button>
      <ModalOverlay
        isDismissable
        isOpen={isOpen}
        onOpenChange={setOpen}
        className='fixed top-20 inset-0 bg-black/50'
      >
        <Modal className='fixed top-20 inset-0 pt-8 pb-10 w-full h-full text-left overflow-scroll sm:w-2/5 sm:mx-auto sm:overflow-hidden'>
          <Dialog>
            <Button className='absolute right-0 my-3 mx-6' onPress={() => setOpen(false)}>
              <XMarkIcon className='h-10 w-10 text-slate-100' />
            </Button>
            <AddForm setOpen={setOpen} />
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
};
export default AddModal;
