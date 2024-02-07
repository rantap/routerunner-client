import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Form, TextField, Label, Input, Button, FieldError } from 'react-aria-components';
import { useForm, Controller } from 'react-hook-form';
import { today, getLocalTimeZone, toCalendarDateTime } from '@internationalized/date';
import { addWorkout } from '../../../api/workouts';
import { Workout } from '../../../types';
import { CalendarPicker } from './CalendarPicker';

const AddForm = () => {
  const { control, register, handleSubmit } = useForm<Workout>();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: addWorkout,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['workouts'] });
    },
  });

  const onSubmit = (data: Workout) => {
    mutation.mutate(data);
    console.log(data);
  };
  return (
    <Form
      className='p-4 pb-6 mb-10 bg-zinc-800 rounded-3xl text-left'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='flex justify-start'>
        <h1 className='ml-6 text-slate-100 text-xl font-bold tracking-tighter'>Add workout</h1>
      </div>
      <TextField className='mb-4 mt-6 mx-4' name='type' isRequired>
        <Label className='ml-2 text-slate-100'>Workout type</Label>
        <Input
          {...register('type')}
          className='mt-1 px-2 py-2 bg-zinc-900 text-slate-100 rounded-md outline outline-1  outline-slate-100/50 w-full focus:outline-none focus:ring focus:ring-green-300'
        />
        <FieldError className='ml-2 text-red-500' />
      </TextField>
      <Controller
        control={control}
        name='date'
        render={({ field: { onChange } }) => {
          return (
            <CalendarPicker
              onChange={(value) => {
                onChange(toCalendarDateTime(value).toDate(getLocalTimeZone()));
                console.log(value);
              }}
              defaultValue={today(getLocalTimeZone())}
              maxValue={today(getLocalTimeZone())}
              name='date'
              label='Date'
              isRequired
            />
          );
        }}
      />
      <TextField className='mb-4 mt-2 mx-4' name='distance' isRequired>
        <Label className='ml-2 text-slate-100'>Distance</Label>
        <Input
          {...register('distance', { valueAsNumber: true })}
          className='mt-1 px-2 py-2 bg-zinc-900 text-slate-100 rounded-md outline outline-1  outline-slate-100/50 w-full focus:outline-none focus:ring focus:ring-green-300'
        />
        <FieldError className='ml-2 text-red-500' />
      </TextField>
      <TextField className='mt-2 mx-4' name='duration' isRequired>
        <Label className=' ml-2 text-slate-100'>Duration</Label>
        <Input
          {...register('duration', { valueAsNumber: true })}
          className='mt-1 px-2 py-2 bg-zinc-900 text-slate-100 rounded-md outline outline-1  outline-slate-100/50 w-full focus:outline-none focus:ring focus:ring-green-300'
        />
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
export default AddForm;
