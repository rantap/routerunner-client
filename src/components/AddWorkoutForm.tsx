import { Form, TextField, Label, Input, Button, FieldError } from 'react-aria-components';

const AddWorkoutForm = () => {
  return (
    <>
      <Form
        className='p-6 bg-zinc-800 rounded-lg text-left'
        onSubmit={(e) => {
          e.preventDefault();
          alert(JSON.stringify(Object.fromEntries(new FormData(e.currentTarget))));
        }}
      >
        <TextField className='mb-4 mt-2' name='type' type='type' isRequired>
          <Label className='text-slate-100 mr-2'>Workout type</Label>
          <Input className='mt-1 p-1 rounded w-full' />
          <FieldError className='text-red-500' />
        </TextField>
        <TextField className='mb-4 mt-2' name='date' type='date' isRequired>
          <Label className='text-slate-100'>Date</Label>
          <Input className='mt-1 p-1 rounded w-full' />
          <FieldError className='text-red-500' />
        </TextField>
        <TextField className='mb-4 mt-2' name='distance' type='distance' isRequired>
          <Label className='text-slate-100'>Distance</Label>
          <Input className='mt-1 p-1 rounded w-full' />
          <FieldError className='text-red-500' />
        </TextField>
        <TextField className='mt-2' name='duration' type='duration' isRequired>
          <Label className='text-slate-100'>Duration</Label>
          <Input className='mt-1 p-1 rounded w-full' />
          <FieldError className='text-red-500' />
        </TextField>
        <Button className='flex mt-8 px-8 py-2  bg-green-300 rounded mx-auto' type='submit'>
          + Add workout
        </Button>
      </Form>
    </>
  );
};
export default AddWorkoutForm;
