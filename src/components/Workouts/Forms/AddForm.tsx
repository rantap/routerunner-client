import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Form, TextField, Label, Input, Button, FieldError } from 'react-aria-components';
import { useForm, Controller } from 'react-hook-form';
import { today, toCalendarDateTime } from '@internationalized/date';
import { addWorkout } from '../../../api/workouts';
import { Workout } from '../../../types';
import { CalendarPicker } from '../Calendar/CalendarPicker';

type Props = {
  setOpen: (value: boolean) => void;
};

const AddForm = ({ setOpen }: Props) => {
  const { control, register, handleSubmit } = useForm<Workout>();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: addWorkout,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['workouts'] });
      setOpen(false);
    },
  });

  const onSubmit = (data: Workout) => {
    mutation.mutate(data);
    console.log(data);
  };
  return (
    <Form
      className='p-4 pb-6 mb-10 bg-zinc-800 rounded-3xl text-left outline-none data-[focus-visible]:outline-2 data-[focus-visible]:outline-slate-100 data-[focus-visible]:outline-solid'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='flex justify-start'>
        <h1 className='ml-6 text-slate-100 text-xl font-bold tracking-tighter'>Add workout</h1>
      </div>
      <TextField className='mb-4 mt-6 mx-4' name='type' isRequired>
        <Label className='ml-2 text-slate-100'>Workout type</Label>
        <Input
          {...register('type')}
          placeholder='Running'
          className='mt-1 px-2 py-2 bg-zinc-900 text-slate-100 rounded-md border border-1  border-slate-100/50 w-full focus:outline-none focus:ring focus:ring-green-300'
        />
        <FieldError className='ml-2 text-red-500' />
      </TextField>
      <Controller
        control={control}
        defaultValue={new Date()}
        name='date'
        render={({ field: { onChange } }) => {
          return (
            <CalendarPicker
              onChange={(value) => {
                onChange(toCalendarDateTime(value).toDate('UTC'));
                console.log(value);
              }}
              maxValue={today('UTC')}
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
          placeholder='12.34'
          className='mt-1 px-2 py-2 bg-zinc-900 text-slate-100 rounded-md border border-1  border-slate-100/50 w-full focus:outline-none focus:ring focus:ring-green-300'
        />
        <FieldError className='ml-2 text-red-500' />
      </TextField>
      <TextField className='mt-2 mx-4' name='duration' isRequired>
        <Label className=' ml-2 text-slate-100'>Duration</Label>
        <Input
          {...register('duration', {
            setValueAs: (v) => new Date('1970-01-01T' + v + 'Z').getTime() / 1000,
          })}
          placeholder='hh:mm:ss'
          className='mt-1 px-2 py-2 bg-zinc-900 text-slate-100 rounded-md border border-1  border-slate-100/50 w-full focus:outline-none focus:ring focus:ring-green-300'
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
