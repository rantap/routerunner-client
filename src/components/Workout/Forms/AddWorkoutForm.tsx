import { Form, TextField, Label, Input, Button, FieldError } from 'react-aria-components';

const AddWorkoutForm = () => {
  return (
    <Form
      className='p-4 pb-6 mb-10 bg-zinc-800 rounded-3xl text-left'
      onSubmit={(e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));
        alert(JSON.stringify(data));
      }}
    >
      <div className='flex justify-start'>
        <h1 className='ml-4 text-slate-100 text-xl font-bold tracking-tighter'>Add workout</h1>
      </div>
      <TextField className='mb-4 mt-6 mx-4' name='type' type='type' isRequired>
        <Label className='ml-2 text-slate-100'>Workout type</Label>
        <Input className='mt-1 px-2 py-2 bg-zinc-900 text-slate-100 rounded-lg outline outline-1  outline-slate-100/50 w-full focus:outline-none focus:ring focus:ring-green-300' />
        <FieldError className='ml-2 text-red-500' />
      </TextField>
      <TextField className='mb-4 mt-2 mx-4' name='date' isRequired>
        <Label className='ml-2 text-slate-100'>Date</Label>
        <Input className='mt-1 px-2 py-2 bg-zinc-900 text-slate-100 rounded-lg outline outline-1  outline-slate-100/50 w-full focus:outline-none focus:ring focus:ring-green-300' />
        <FieldError className='ml-2 text-red-500' />
      </TextField>
      <TextField className='mb-4 mt-2 mx-4' name='distance' type='distance' isRequired>
        <Label className='ml-2 text-slate-100'>Distance</Label>
        <Input className='mt-1 px-2 py-2 bg-zinc-900 text-slate-100 rounded-lg outline outline-1  outline-slate-100/50 w-full focus:outline-none focus:ring focus:ring-green-300' />
        <FieldError className='ml-2 text-red-500' />
      </TextField>
      <TextField className='mt-2 mx-4' name='duration' type='duration' isRequired>
        <Label className=' ml-2 text-slate-100'>Duration</Label>
        <Input className='mt-1 px-2 py-2 bg-zinc-900 text-slate-100 rounded-lg outline outline-1  outline-slate-100/50 w-full focus:outline-none focus:ring focus:ring-green-300' />
        <FieldError className='ml-2 text-red-500' />
      </TextField>
      <Button
        className='flex mt-8 px-8 py-4 bg-green-300 rounded-full mx-auto transition ease-in-out hover:scale-105 hover:bg-green-400 duration-300'
        type='submit'
      >
        + Add workout
      </Button>
    </Form>
  );
};
export default AddWorkoutForm;
