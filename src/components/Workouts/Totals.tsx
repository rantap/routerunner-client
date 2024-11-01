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
    <div className='mb-10 lg:mb-32 lg:w-1/2 lg:mx-auto'>
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
        <div className='flex justify-center'>
          <Button
            onPress={() => refetch()}
            className='flex mt-6 px-8 py-2 bg-green-300 text-zinc-900 rounded-full hover:bg-green-400 outline-none data-[focus-visible]:ring data-[focus-visible]:ring-orange-300 data-[pressed]:scale-95'
          >
            <MagnifyingGlassIcon className='h-8 w-8 mr-2' />
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
