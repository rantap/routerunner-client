import { useState } from 'react';
import { Button } from 'react-aria-components';
import { CalendarRangePicker } from './Calendar/CalendarRangePicker';
import { Spinner } from '../UI/Spinner';
import { today, startOfWeek, parseDate, getLocalTimeZone } from '@internationalized/date';
import { useQuery } from '@tanstack/react-query';
import { fetchTotals } from '../../api/workouts';
import { Total } from '../../types';
import { formatDuration } from '../../utils/formatDuration';

const Totals = () => {
  const [date, setDate] = useState({
    start: startOfWeek(parseDate(today(getLocalTimeZone()).toString()), 'gb-GB'),
    end: today(getLocalTimeZone()),
  });
  const { isLoading, isError, error, data, refetch } = useQuery({
    queryKey: ['workouts'],
    queryFn: () => fetchTotals(date.start.toString(), date.end.toString()),
    enabled: false,
    retry: false,
  });

  return (
    <>
      <p>Workout dates</p>
      <CalendarRangePicker
        value={date}
        onChange={setDate}
        maxValue={today(getLocalTimeZone())}
        defaultValue={{
          start: date.start,
          end: date.end,
        }}
        aria-label='Workout dates'
      />
      <div className='flex justify-center'>
        <Button
          onPress={() => refetch()}
          className='mt-6 px-12 py-2 bg-green-300 text-zinc-900 rounded-full transition ease-in-out duration-300 hover:scale-105 hover:bg-green-400 outline-none data-[focus-visible]:ring data-[focus-visible]:ring-orange-300'
        >
          Search
        </Button>
      </div>
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
            <span>{date.start.toString()}</span>
            <span> to </span>
            <span>{date.end.toString()}</span>
          </div>
          <div className='mt-2 p-4 bg-zinc-800 rounded-lg'>
            {data.map((total: Total) => (
              <div className='flex' key={total.type}>
                <p className='mr-8'>{total.type}</p>
                <p className='mr-8'>{formatDuration(total._sum.duration)}</p>
                <p>{total._sum.distance} km </p>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};
export default Totals;
