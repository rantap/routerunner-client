import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  Form,
  TextField,
  Label,
  Input,
  Button,
  FieldError,
  DateInput,
  DateSegment,
  Calendar,
  CalendarCell,
  CalendarGrid,
  DatePicker,
  Dialog,
  Group,
  Heading,
  Popover,
} from 'react-aria-components';
import { useForm, Controller } from 'react-hook-form';
import { addWorkout } from '../../../api/workouts';
import { Workout } from '../../../types';
import { today, getLocalTimeZone, toCalendarDateTime } from '@internationalized/date';

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
            <DatePicker
              onChange={(value) => onChange(toCalendarDateTime(value).toDate(getLocalTimeZone()))}
              defaultValue={today(getLocalTimeZone())}
              maxValue={today(getLocalTimeZone())}
              name='date'
              isRequired
              className='group flex flex-col gap-1 w-4/5'
            >
              <Label className='ml-6 text-slate-100'>Date</Label>
              <Group className='flex mb-2 mx-4'>
                <DateInput className='flex px-2 py-2 bg-zinc-900 text-slate-100 rounded-md outline outline-1  outline-slate-100/50 w-full focus:outline-none focus:ring focus:ring-green-300'>
                  {(segment) => (
                    <DateSegment
                      className='rounded ml-1 outline-none focus:bg-green-300 focus:text-zinc-900'
                      segment={segment}
                    />
                  )}
                </DateInput>
                <Button className='ml-4 text-slate-100'>▼</Button>
              </Group>
              <Popover>
                <Dialog>
                  <Calendar className='p-4 pb-6 mb-10 bg-zinc-800 rounded-3xl border border-black text-left text-slate-100 '>
                    <header className='flex justify-evenly mb-4'>
                      <Button slot='previous'>◀</Button>
                      <Heading />
                      <Button slot='next'>▶</Button>
                    </header>
                    <CalendarGrid>
                      {(date) => (
                        <CalendarCell
                          className='w-10 h-10 cursor-default rounded-full flex items-center justify-center outside-month:text-gray-300 hover:bg-green-300 pressed:bg-gray-200 selected:bg-violet-700 hover:text-zinc-900 focus-visible:ring'
                          date={date}
                        />
                      )}
                    </CalendarGrid>
                  </Calendar>
                </Dialog>
              </Popover>
            </DatePicker>
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
