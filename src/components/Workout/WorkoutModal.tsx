import { useState } from 'react';
import { Button, Dialog, DialogTrigger, Modal } from 'react-aria-components';
import AddWorkoutForm from './Forms/AddWorkoutForm';
import { XMarkIcon } from '@heroicons/react/24/solid';

const WorkoutModal = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <DialogTrigger>
      <Button
        onPress={() => setOpen(true)}
        className='mt-6 px-8 py-4 bg-green-300 rounded-full transition ease-in-out hover:scale-105 hover:bg-green-400 duration-300'
      >
        + Add workout
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={setOpen}
        className='absolute top-20 inset-0 pt-8 pb-20 w-full text-left bg-zinc-900 overflow-scroll'
      >
        <Dialog>
          <Button className='absolute right-0 my-3 mx-6 sm:hidden' onPress={() => setOpen(false)}>
            <XMarkIcon className='h-10 w-10 text-slate-100' />
          </Button>
          <AddWorkoutForm />
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
};
export default WorkoutModal;
