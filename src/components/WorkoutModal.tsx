import { useState } from 'react';
import { Button, Dialog, DialogTrigger, Modal, ModalOverlay } from 'react-aria-components';
import AddWorkoutForm from './AddWorkoutForm';

const WorkoutModal = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <DialogTrigger>
      <Button
        onPress={() => setOpen(true)}
        className='mt-4 px-8 py-2  bg-green-300 rounded-full transition ease-in-out hover:scale-105 hover:bg-green-400 duration-300'
      >
        + Add workout
      </Button>
      <ModalOverlay
        isDismissable
        isOpen={isOpen}
        onOpenChange={setOpen}
        className='fixed inset-0 backdrop-blur overflow-y-auto'
      >
        <Modal className='fixed top-24 right-0 left-0 mx-auto mt-4 w-5/6 text-left drop-shadow-xl'>
          <Dialog>
            <AddWorkoutForm />
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
};
export default WorkoutModal;
