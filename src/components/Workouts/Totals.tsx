import { useState } from 'react';
import { Button } from 'react-aria-components';
import { CalendarRangePicker } from './Calendar/CalendarRangePicker';
import { today, parseDate, getLocalTimeZone } from '@internationalized/date';

const Totals = () => {
  const [date, setDate] = useState({
    start: parseDate('2024-02-25'),
    end: today(getLocalTimeZone()),
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
        <Button className='mt-6 px-12 py-2 bg-green-300 text-zinc-900 rounded-full transition ease-in-out duration-300 hover:scale-105 hover:bg-green-400 outline-none data-[focus-visible]:ring data-[focus-visible]:ring-orange-300'>
          Search
        </Button>
      </div>
      <div className='mt-8 p-4 bg-zinc-800 rounded-lg'>
        <div className='text-center'>
          <span>{date.start.toString()}</span>
          <span> to </span>
          <span>{date.end.toString()}</span>
        </div>
        <div>
          <p className='mb-4'>Type: </p>
          <p className='mb-4'>Distance: </p>
          <p>Duration: </p>
        </div>
      </div>
      {console.log(date)}
    </>
  );
};
export default Totals;
