import {
  Form,
  TextField,
  Label,
  Input,
  Button,
  FieldError,
  DateField,
  DateInput,
  DateSegment,
} from 'react-aria-components';

const AddWorkoutForm = () => {
  const addWorkout = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newData = Object.fromEntries(new FormData(e.currentTarget));
    alert(`You submitted: ${JSON.stringify(newData)}`);
  };
  return (
    <Form className='p-4 pb-6 mb-10 bg-zinc-800 rounded-3xl text-left' onSubmit={addWorkout}>
      <div className='flex justify-start'>
        <h1 className='ml-6 text-slate-100 text-xl font-bold tracking-tighter'>Add workout</h1>
      </div>
      <TextField className='mb-4 mt-6 mx-4' name='type' isRequired>
        <Label className='ml-2 text-slate-100'>Workout type</Label>
        <Input className='mt-1 px-2 py-2 bg-zinc-900 text-slate-100 rounded-md outline outline-1  outline-slate-100/50 w-full focus:outline-none focus:ring focus:ring-green-300' />
        <FieldError className='ml-2 text-red-500' />
      </TextField>
      <DateField className='mb-4 mt-2 mx-4' name='date' isRequired>
        <Label className='ml-2 text-slate-100'>Date</Label>
        <DateInput className='flex mt-1 px-2 py-2 bg-zinc-900 text-slate-100 rounded-md outline outline-1 outline-slate-100/50 w-full data-[focus-within]:outline-none data-[focus-within]:ring data-[focus-within]:ring-green-300'>
          {(segment) => (
            <DateSegment
              className='rounded ml-1 outline-none focus:bg-green-300 focus:text-zinc-900'
              segment={segment}
            />
          )}
        </DateInput>
        <FieldError className='ml-2 text-red-500' />
      </DateField>
      <TextField className='mb-4 mt-2 mx-4' name='distance' isRequired>
        <Label className='ml-2 text-slate-100'>Distance</Label>
        <Input className='mt-1 px-2 py-2 bg-zinc-900 text-slate-100 rounded-md outline outline-1  outline-slate-100/50 w-full focus:outline-none focus:ring focus:ring-green-300' />
        <FieldError className='ml-2 text-red-500' />
      </TextField>
      <TextField className='mt-2 mx-4' name='duration' isRequired>
        <Label className=' ml-2 text-slate-100'>Duration</Label>
        <Input className='mt-1 px-2 py-2 bg-zinc-900 text-slate-100 rounded-md outline outline-1  outline-slate-100/50 w-full focus:outline-none focus:ring focus:ring-green-300' />
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
