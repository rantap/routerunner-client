import { Form, TextField, Label, Input, Button, FieldError } from 'react-aria-components';

const AddWorkoutForm = () => {
  return (
    <Form
      className='p-4 bg-zinc-800 rounded-lg text-left'
      onSubmit={(e) => {
        e.preventDefault();
        alert(JSON.stringify(Object.fromEntries(new FormData(e.currentTarget))));
      }}
    >
      <TextField className='mb-4 mt-2' name='type' type='type' isRequired>
        <Label className='ml-2 text-slate-100 mr-2'>Workout type</Label>
        <Input className='mt-1 px-2 py-2 bg-zinc-900 text-slate-100 rounded-full border  border-slate-100/20 w-full' />
        <FieldError className='ml-2 text-red-500' />
      </TextField>
      <TextField className='mb-4 mt-2' name='date' type='date' isRequired>
        <Label className='ml-2 text-slate-100'>Date</Label>
        <Input className='mt-1 px-2 py-2 bg-zinc-900 text-slate-100 rounded-full border  border-slate-100/20 w-full' />
        <FieldError className='ml-2 text-red-500' />
      </TextField>
      <TextField className='mb-4 mt-2' name='distance' type='distance' isRequired>
        <Label className='ml-2 text-slate-100'>Distance</Label>
        <Input className='mt-1 px-2 py-2 bg-zinc-900 text-slate-100 rounded-full border  border-slate-100/20 w-full' />
        <FieldError className='ml-2 text-red-500' />
      </TextField>
      <TextField className='mt-2' name='duration' type='duration' isRequired>
        <Label className=' ml-2 text-slate-100'>Duration</Label>
        <Input className='mt-1 px-2 py-2 bg-zinc-900 text-slate-100 rounded-full border  border-slate-100/20 w-full' />
        <FieldError className='ml-2 text-red-500' />
      </TextField>
      <Button
        className='flex mt-8 px-8 py-2 bg-green-300 rounded-full mx-auto transition ease-in-out hover:scale-105 hover:bg-green-400 duration-300'
        type='submit'
      >
        + Add workout
      </Button>
    </Form>
  );
};
export default AddWorkoutForm;
