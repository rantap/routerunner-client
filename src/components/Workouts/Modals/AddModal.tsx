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
        className='flex mt-6 px-8 py-4 bg-green-300 rounded-full transition ease-in-out hover:scale-105 hover:bg-green-400 duration-300 outline-none data-[focus-visible]:outline-2 data-[focus-visible]:outline-slate-100 data-[focus-visible]:outline-solid'
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
        <Modal className='fixed top-20 inset-0 mt-2 pt-8 pb-28 w-full h-full text-left overflow-scroll sm:w-2/5 sm:mx-auto sm:pt-20 sm:overflow-hidden '>
          <Dialog className='outline-none data-[focus-visible]:outline-2 data-[focus-visible]:outline-slate-100 data-[focus-visible]:outline-solid'>
            <Button
              className='absolute right-0 my-3 mx-6 outline-none data-[focus-visible]:outline-2 data-[focus-visible]:outline-slate-100 data-[focus-visible]:outline-solid'
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
