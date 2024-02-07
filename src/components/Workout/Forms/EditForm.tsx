import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Form, TextField, Label, Input, Button, FieldError } from 'react-aria-components';
import { CalendarPicker } from './CalendarPicker';
import { useForm, Controller } from 'react-hook-form';
import {
  today,
  getLocalTimeZone,
  toCalendarDateTime,
  toCalendarDate,
  parseAbsoluteToLocal,
} from '@internationalized/date';
import { editWorkout } from '../../../api/workouts';
import { Workout } from '../../../types';
import { formatDuration } from '../../../utils/formatDuration';

interface Props {
  workout: Workout;
}
interface Mutation {
  id: number;
  newWorkout: Workout;
}

const EditForm = ({ workout }: Props) => {
  const { control, register, handleSubmit } = useForm<Workout>();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: ({ id, newWorkout }: Mutation) => editWorkout(id, newWorkout),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['workouts'] });
    },
  });

  const onSubmit = (data: Workout) => {
    mutation.mutate({ id: workout.id, newWorkout: data });
    console.log(data);
  };

  return (
    <Form
      className='p-4 pb-6 mb-10 bg-zinc-800 rounded-3xl text-left'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='flex justify-start'>
        <h1 className='ml-6 text-slate-100 text-xl font-bold tracking-tighter'>Edit workout</h1>
      </div>
      <TextField defaultValue={workout.type} className='mb-4 mt-6 mx-4' name='type' isRequired>
        <Label className='ml-2 text-slate-100'>Workout type</Label>
        <Input
          {...register('type')}
          className='mt-1 px-2 py-2 bg-zinc-900 text-slate-100 rounded-md outline outline-1 outline-slate-100/50 w-full focus:outline-none focus:ring focus:ring-green-300'
        />
        <FieldError className='ml-2 text-red-500' />
      </TextField>
      <Controller
        control={control}
        defaultValue={workout.date}
        name='date'
        render={({ field }) => {
          console.log(workout.date.toString());
          return (
            <CalendarPicker
              onChange={(value) => {
                field.onChange(toCalendarDateTime(value).toDate(getLocalTimeZone()));
                console.log(value);
              }}
              defaultValue={toCalendarDate(parseAbsoluteToLocal(workout.date.toString()))}
              maxValue={today(getLocalTimeZone())}
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
          className='mt-1 px-2 py-2 bg-zinc-900 text-slate-100 rounded-md outline outline-1 outline-slate-100/50 w-full focus:outline-none focus:ring focus:ring-green-300'
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
          className='mt-1 px-2 py-2 bg-zinc-900 text-slate-100 rounded-md outline outline-1 outline-slate-100/50 w-full focus:outline-none focus:ring focus:ring-green-300'
        />
        <FieldError className='ml-2 text-red-500' />
      </TextField>
      <Button
        className='flex mt-8 px-8 py-4 bg-green-300 rounded-full mx-auto transition ease-in-out hover:scale-105 hover:bg-green-400 duration-300'
        type='submit'
      >
        Edit workout
      </Button>
    </Form>
  );
};
export default EditForm;
