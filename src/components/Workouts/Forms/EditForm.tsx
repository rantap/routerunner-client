import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Form, TextField, Label, Input, Button, FieldError } from 'react-aria-components';
import { CalendarPicker } from '../Calendar/CalendarPicker';
import { PencilIcon } from '@heroicons/react/24/solid';
import { useForm, Controller } from 'react-hook-form';
import {
  today,
  toCalendarDateTime,
  toCalendarDate,
  parseAbsoluteToLocal,
} from '@internationalized/date';
import { editWorkout } from '../../../api/workouts';
import { Workout } from '../../../types';
import { formatDuration } from '../../../utils/formatDuration';

type Props = {
  workout: Workout;
  setOpen: (value: boolean) => void;
};
interface Mutation {
  id: number;
  newWorkout: Workout;
}

const EditForm = ({ workout, setOpen }: Props) => {
  const { control, register, handleSubmit } = useForm<Workout>();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: ({ id, newWorkout }: Mutation) => editWorkout(id, newWorkout),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['workouts'] });
      setOpen(false);
    },
  });

  const onSubmit = (data: Workout) => {
    mutation.mutate({ id: workout.id, newWorkout: data });
    console.log(data);
  };

  return (
    <Form
      className='p-4 pb-6 mb-10 bg-zinc-800 rounded-r-3xl text-left sm:rounded-3xl'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='flex justify-start'>
        <h1 className='ml-6 text-slate-100 text-xl font-bold tracking-tighter'>Edit workout</h1>
      </div>
      <TextField defaultValue={workout.type} className='mb-4 mt-6 mx-4' name='type' isRequired>
        <Label className='ml-2 text-slate-100'>Workout type</Label>
        <Input
          {...register('type')}
          className='mt-1 px-2 py-2 bg-zinc-700 text-slate-100 rounded w-full focus:outline-none focus:ring focus:ring-green-300'
        />
        <FieldError className='ml-2 text-red-500' />
      </TextField>
      <Controller
        control={control}
        defaultValue={workout.date}
        name='date'
        render={({ field }) => {
          return (
            <CalendarPicker
              onChange={(value) => {
                field.onChange(toCalendarDateTime(value).toDate('UTC'));
                console.log(value);
              }}
              defaultValue={toCalendarDate(parseAbsoluteToLocal(workout.date.toString()))}
              maxValue={today('UTC')}
              name='date'
              label='Date'
              isRequired
            />
          );
        }}
      />
      <TextField
        defaultValue={workout.distance.toString()}
        className='mb-4 mt-2 mx-4'
        name='distance'
        isRequired
      >
        <Label className='ml-2 text-slate-100'>Distance</Label>
        <Input
          {...register('distance', { valueAsNumber: true })}
          className='mt-1 px-2 py-2 bg-zinc-700 text-slate-100 rounded w-full focus:outline-none focus:ring focus:ring-green-300'
        />
        <FieldError className='ml-2 text-red-500' />
      </TextField>
      <TextField
        defaultValue={formatDuration(workout.duration)}
        className='mt-2 mx-4'
        name='duration'
        isRequired
      >
        <Label className=' ml-2 text-slate-100'>Duration</Label>
        <Input
          {...register('duration', {
            setValueAs: (v) => new Date('1970-01-01T' + v + 'Z').getTime() / 1000,
          })}
          className='mt-1 px-2 py-2 bg-zinc-700 text-slate-100 rounded w-full focus:outline-none focus:ring focus:ring-green-300'
        />
        <FieldError className='ml-2 text-red-500' />
      </TextField>
      <Button
        className='flex ml-4 mt-8 px-8 py-3 bg-green-300 rounded-full hover:bg-green-400 outline-none data-[focus-visible]:ring data-[focus-visible]:ring-orange-300 data-[pressed]:scale-95'
        type='submit'
      >
        <PencilIcon className='h-6 w-6 mr-1' />
        <p className='tracking-tighter'>Edit workout</p>
      </Button>
    </Form>
  );
};
export default EditForm;
