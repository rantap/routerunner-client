import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Form, TextField, Label, Input, Button, FieldError } from 'react-aria-components';
import { useForm, Controller } from 'react-hook-form';
import { today, toCalendarDateTime } from '@internationalized/date';
import { addWorkout } from '../../../api/workouts';
import { Workout } from '../../../types';
import { CalendarPicker } from '../Calendar/CalendarPicker';
import { PlusIcon } from '@heroicons/react/24/solid';

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
      className='p-4 pb-6 mb-10 bg-zinc-800 rounded-r-3xl text-left sm:rounded-3xl'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='flex justify-start'>
        <h1 className='ml-6 text-slate-100 text-xl font-bold tracking-tighter'>Add workout</h1>
      </div>
      <TextField className='mx-4 mt-6 mb-4' name='type' isRequired>
        <Label className='ml-2 text-slate-100'>Workout type</Label>
        <Input
          {...register('type')}
          placeholder='Running'
          className='mt-1 px-2 py-2 bg-zinc-700 text-slate-100 rounded w-full focus:outline-none focus:ring focus:ring-green-300'
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
          className='mt-1 px-2 py-2 bg-zinc-700 text-slate-100 rounded w-full focus:outline-none focus:ring focus:ring-green-300'
        />
        <FieldError className='ml-2 text-red-500' />
      </TextField>
      <TextField className='mx-4 mt-2' name='duration' isRequired>
        <Label className=' ml-2 text-slate-100'>Duration</Label>
        <Input
          {...register('duration', {
            setValueAs: (v) => new Date('1970-01-01T' + v + 'Z').getTime() / 1000,
          })}
          placeholder='hh:mm:ss'
          className='mt-1 px-2 py-2 bg-zinc-700 text-slate-100 rounded w-full focus:outline-none focus:ring focus:ring-green-300'
        />
        <FieldError className='ml-2 text-red-500' />
      </TextField>
      <Button
        className='flex ml-4 mt-8 px-6 py-3 bg-green-300 rounded-full hover:bg-green-400 outline-none data-[focus-visible]:ring data-[focus-visible]:ring-orange-300 data-[pressed]:scale-95'
        type='submit'
      >
        <PlusIcon className='h-6 w-6 mr-1' />
        <p className='tracking-tighter'>Add workout</p>
      </Button>
    </Form>
  );
};
export default AddForm;
