import { useState } from 'react';
import { Button, Dialog, DialogTrigger, Modal, ModalOverlay } from 'react-aria-components';
import { XMarkIcon, DocumentPlusIcon } from '@heroicons/react/24/solid';
import AddForm from '../Forms/AddForm';

const AddModal = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <DialogTrigger>
      <Button
        onPress={() => setOpen(true)}
        className='flex mt-6 px-8 py-3 bg-green-300 rounded-full hover:bg-green-400 outline-none data-[focus-visible]:ring data-[focus-visible]:ring-orange-300 data-[pressed]:scale-95 lg:mt-0'
      >
        <DocumentPlusIcon className='h-8 w-8 mr-2' />
        <p className='my-auto tracking-tighter'>Add a workout</p>
      </Button>
      <ModalOverlay
        isDismissable
        isOpen={isOpen}
        onOpenChange={setOpen}
        className='fixed top-20 inset-0 bg-black/50 data-[entering]:animate-fade-in'
      >
        <Modal className='fixed top-20 inset-0 mt-2 pr-8 pt-8 pb-36 text-left overflow-scroll data-[entering]:animate-slide-in data-[exiting]:animate-slide-out sm:w-2/5 lg:w-2/6 sm:mx-auto sm:pt-6 sm:overflow-hidden sm:data-[entering]:animate-zoom sm:data-[exiting]:animate-none'>
          <Dialog className='outline-none data-[focus-visible]:ring data-[focus-visible]:ring-orange-300'>
            <Button
              className='absolute right-0 mx-14 my-3 outline-none data-[focus-visible]:ring data-[focus-visible]:ring-orange-300'
              onPress={() => setOpen(false)}
            >
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
