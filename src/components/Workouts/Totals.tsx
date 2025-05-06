import { useState } from 'react';
import { Button } from 'react-aria-components';
import { CalendarRangePicker } from './Calendar/CalendarRangePicker';
import { Spinner } from '../UI/Spinner';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { today, startOfWeek, parseDate } from '@internationalized/date';
import TotalsTable from './TotalsTable';
import { useTotalWorkouts } from '../../hooks/useWorkouts';

const Totals = () => {
  const [date, setDate] = useState({
    start: startOfWeek(parseDate(today('UTC').toString()), 'gb-GB'),
    end: today('UTC'),
  });
  const { isLoading, isError, error, data, refetch } = useTotalWorkouts(
    date.start.toString(),
    date.end.toString(),
  );
  return (
    <div className='mb-10 lg:mx-auto lg:mb-32 lg:w-1/2'>
      <>
        <p>Workout dates</p>
        <CalendarRangePicker
          value={date}
          onChange={setDate}
          maxValue={today('UTC')}
          defaultValue={{
            start: date.start,
            end: date.end,
          }}
          aria-label='Workout dates'
        />
        <div className='flex justify-start'>
          <Button
            onPress={() => refetch()}
            className='mt-6 flex rounded-full bg-violet-800 px-8 py-2 text-slate-100 outline-none hover:bg-violet-900 data-[pressed]:scale-95 data-[focus-visible]:ring data-[focus-visible]:ring-orange-300 dark:bg-green-300 dark:text-zinc-900 dark:hover:bg-green-400'
          >
            <MagnifyingGlassIcon className='mr-2 h-8 w-8' />
            <p className='my-auto tracking-tighter'>Search</p>
          </Button>
        </div>
      </>
      {isLoading ? (
        <div className='m-12 text-center'>
          <Spinner />
          <p className='mt-6'>Loading...</p>
        </div>
      ) : isError ? (
        <div className='mt-6 text-center'>Error: {error.message}</div>
      ) : !data ? (
        <div></div>
      ) : data && data.length === 0 ? (
        <div className='mt-6 text-center'>No results found!</div>
      ) : (
        <>
          <div className='mt-8 text-center'>
            <span>{new Date(date.start.toString()).toDateString()}</span>
            <span> - </span>
            <span>{new Date(date.end.toString()).toDateString()}</span>
          </div>
          <TotalsTable totals={data} />
        </>
      )}
    </div>
  );
};
export default Totals;
