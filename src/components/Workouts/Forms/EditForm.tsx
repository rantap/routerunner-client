import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  Form,
  TextField,
  Label,
  Input,
  Button,
  FieldError,
} from 'react-aria-components';
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
      className='mb-10 rounded-r-3xl bg-slate-100 p-4 pb-6 text-left dark:bg-zinc-800 sm:rounded-3xl'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='flex justify-start'>
        <h1 className='ml-6 text-xl font-bold tracking-tighter text-zinc-900 dark:text-slate-100'>
          Edit workout
        </h1>
      </div>
      <TextField
        defaultValue={workout.type}
        className='mx-4 mb-4 mt-6'
        name='type'
        isRequired
      >
        <Label className='ml-2 text-zinc-900 dark:text-slate-100'>
          Workout type
        </Label>
        <Input
          {...register('type')}
          className='mt-1 w-full rounded border border-zinc-900 bg-slate-50 px-2 py-2 text-zinc-900 focus:outline-none focus:ring focus:ring-violet-800 dark:border-zinc-600 dark:bg-zinc-700 dark:text-slate-100 dark:focus:ring-green-300'
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
              defaultValue={toCalendarDate(
                parseAbsoluteToLocal(workout.date.toString()),
              )}
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
        className='mx-4 mb-4 mt-2'
        name='distance'
        isRequired
      >
        <Label className='ml-2 text-zinc-900 dark:text-slate-100'>
          Distance
        </Label>
        <Input
          {...register('distance', { valueAsNumber: true })}
          className='mt-1 w-full rounded border border-zinc-900 bg-slate-50 px-2 py-2 text-zinc-900 focus:outline-none focus:ring focus:ring-violet-800 dark:border-zinc-600 dark:bg-zinc-700 dark:text-slate-100 dark:focus:ring-green-300'
        />
        <FieldError className='ml-2 text-red-500' />
      </TextField>
      <TextField
        defaultValue={formatDuration(workout.duration)}
        className='mx-4 mt-2'
        name='duration'
        isRequired
      >
        <Label className='ml-2 text-zinc-900 dark:text-slate-100'>
          Duration
        </Label>
        <Input
          {...register('duration', {
            setValueAs: (v) =>
              new Date('1970-01-01T' + v + 'Z').getTime() / 1000,
          })}
          className='mt-1 w-full rounded border border-zinc-900 bg-slate-50 px-2 py-2 text-zinc-900 focus:outline-none focus:ring focus:ring-violet-800 dark:border-zinc-600 dark:bg-zinc-700 dark:text-slate-100 dark:focus:ring-green-300'
        />
        <FieldError className='ml-2 text-red-500' />
      </TextField>
      <Button
        className='ml-4 mt-8 flex rounded-full bg-violet-800 px-6 py-3 text-slate-50 shadow-lg outline-none hover:bg-violet-900 data-[pressed]:scale-95 data-[focus-visible]:ring data-[focus-visible]:ring-orange-300 dark:bg-green-300 dark:text-zinc-900 dark:hover:bg-green-400'
        type='submit'
      >
        <PencilIcon className='mr-1 h-6 w-6' />
        <p className='tracking-tighter'>Edit workout</p>
      </Button>
    </Form>
  );
};
export default EditForm;
