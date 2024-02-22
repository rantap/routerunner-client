import { CalendarDaysIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import type { DateRangePickerProps, DateValue, ValidationResult } from 'react-aria-components';
import {
  Button,
  CalendarCell,
  CalendarGrid,
  DateInput,
  DateRangePicker,
  DateSegment,
  Dialog,
  FieldError,
  Group,
  Heading,
  Label,
  Popover,
  RangeCalendar,
  Text,
} from 'react-aria-components';
import { I18nProvider } from 'react-aria';

interface CalendarRangePickerProps<T extends DateValue> extends DateRangePickerProps<T> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function CalendarRangePicker<T extends DateValue>({
  label,
  description,
  errorMessage,
  ...props
}: CalendarRangePickerProps<T>) {
  return (
    <I18nProvider locale='en-GB'>
      <DateRangePicker
        {...props}
        className='group flex flex-col gap-1 w-full data-[focus-ring]:outline-green-300'
      >
        <Label className='ml-6 text-slate-100'>{label}</Label>
        <Group className='flex justify-center mb-2 focus:ring focus:ring-green-300'>
          <DateInput
            slot='start'
            className='flex px-2 py-2 bg-zinc-900 text-slate-100 rounded-md border border-1  border-slate-100/50 w-full focus:ring focus:ring-bg-300 data-[focus-visible]:outline-green-300 data-[focus-visible]:outline-offset-2'
          >
            {(segment) => (
              <DateSegment
                segment={segment}
                className='rounded ml-1 outline-none focus:bg-green-300 focus:text-zinc-900'
              />
            )}
          </DateInput>
          <span aria-hidden='true' className='my-auto mx-2'>
            to
          </span>
          <DateInput
            slot='end'
            className='flex px-2 py-2 bg-zinc-900 text-slate-100 rounded-md border border-1  border-slate-100/50 w-full focus:ring focus:ring-bg-300 data-[focus-visible]:outline-green-300 data-[focus-visible]:outline-offset-2'
          >
            {(segment) => (
              <DateSegment
                segment={segment}
                className='rounded ml-1 outline-none focus:bg-green-300 focus:text-zinc-900'
              />
            )}
          </DateInput>
          <Button className='ml-4 text-slate-100'>
            <CalendarDaysIcon className='h-10 w-10' />
          </Button>
        </Group>
        {description && <Text slot='description'>{description}</Text>}
        <FieldError>{errorMessage}</FieldError>
        <Popover>
          <Dialog>
            <RangeCalendar
              className='p-4 mr-3 bg-zinc-800 border border-zinc-900 rounded-xl 
         text-slate-100'
            >
              <header className='flex justify-evenly mb-4'>
                <Button slot='previous'>
                  <ChevronLeftIcon className='h-8 w-8' />
                </Button>
                <Heading />
                <Button slot='next'>
                  <ChevronRightIcon className='h-8 w-8' />
                </Button>
              </header>
              <CalendarGrid>
                {(date) => (
                  <CalendarCell
                    date={date}
                    className='w-10 h-10 cursor-default rounded-full flex items-center justify-center data-[disabled]:text-gray-500 hover:bg-green-300 hover:text-zinc-900  data-[disabled]:hover:bg-red-500 data-[outside-month]:hidden'
                  />
                )}
              </CalendarGrid>
            </RangeCalendar>
          </Dialog>
        </Popover>
      </DateRangePicker>
    </I18nProvider>
  );
}
