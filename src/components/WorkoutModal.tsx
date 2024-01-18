import {
  Button,
  Dialog,
  DialogTrigger,
  FieldError,
  Form,
  Input,
  Label,
  Modal,
  TextField,
} from 'react-aria-components';

const WorkoutModal = () => {
  return (
    <>
      <DialogTrigger>
        <Button className='mt-4 p-2 bg-green-300 rounded'>+ Add workout</Button>
        <Modal isDismissable>
          <Dialog>
            {({ close }) => (
              <Form
                className='fixed top-32 right-0 left-0 mx-auto mt-4 w-5/6 p-6 bg-zinc-800 rounded-lg text-left sm:static'
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(JSON.stringify(Object.fromEntries(new FormData(e.currentTarget))));
                  close();
                }}
              >
                <TextField className='mb-4 mt-2' name='type' type='type' isRequired>
                  <Label className='text-slate-100 mr-2'>Workout type</Label>
                  <Input className='mt-1 p-1 rounded w-full' />
                  <FieldError className='text-red-500 text-sm' />
                </TextField>
                <TextField className='mb-4 mt-2' name='date' type='date' isRequired>
                  <Label className='text-slate-100'>Date</Label>
                  <Input className='mt-1 p-1 rounded w-full' />
                  <FieldError className='text-red-500 text-sm' />
                </TextField>
                <TextField className='mb-4 mt-2' name='distance' type='distance' isRequired>
                  <Label className='text-slate-100'>Distance</Label>
                  <Input className='mt-1 p-1 rounded w-full' />
                  <FieldError className='text-red-500 text-sm' />
                </TextField>
                <TextField className='mt-2' name='duration' type='duration' isRequired>
                  <Label className='text-slate-100'>Duration</Label>
                  <Input className='mt-1 p-1 rounded w-full' />
                  <FieldError className='text-red-500 text-sm' />
                </TextField>
                <Button className='flex mt-8 px-8 py-2  bg-green-300 rounded mx-auto' type='submit'>
                  + Add workout
                </Button>
              </Form>
            )}
          </Dialog>
        </Modal>
      </DialogTrigger>
    </>
  );
};
export default WorkoutModal;
