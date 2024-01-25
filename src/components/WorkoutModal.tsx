import { useState } from 'react';
import { Button, Dialog, DialogTrigger, Modal } from 'react-aria-components';
import AddWorkoutForm from './AddWorkoutForm';
import { XMarkIcon } from '@heroicons/react/24/solid';

const WorkoutModal = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <DialogTrigger>
      <Button
        onPress={() => setOpen(true)}
        className='mt-4 px-8 py-2 bg-green-300 rounded-full transition ease-in-out hover:scale-105 hover:bg-green-400 duration-300'
      >
        + Add workout
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={setOpen}
        className='fixed top-24 inset-0 mt-4 w-full text-left bg-zinc-900 backdrop-blur-none overflow-y-auto'
      >
        <Dialog>
          <Button className='fixed right-0 my-2 mx-4 sm:hidden' onPress={() => setOpen(false)}>
            <XMarkIcon className='h-10 w-10 text-slate-100' />
          </Button>
          <AddWorkoutForm />
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
};
export default WorkoutModal;
