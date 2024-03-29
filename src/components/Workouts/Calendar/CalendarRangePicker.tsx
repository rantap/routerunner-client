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
            className='flex px-2 py-2 bg-zinc-800 text-slate-100 rounded w-full data-[focus-visible]:ring data-[focus-visible]:ring-green-300 data-[focus-within]:ring data-[focus-within]:ring-green-300'
          >
            {(segment) => (
              <DateSegment
                segment={segment}
                className='ml-1 rounded outline-none focus:bg-green-300 focus:text-zinc-900'
              />
            )}
          </DateInput>
          <span aria-hidden='true' className='mx-2 my-auto'>
            to
          </span>
          <DateInput
            slot='end'
            className='flex px-2 py-2 bg-zinc-800 text-slate-100 rounded w-full data-[focus-visible]:ring data-[focus-visible]:ring-green-300 data-[focus-within]:ring data-[focus-within]:ring-green-300 '
          >
            {(segment) => (
              <DateSegment
                segment={segment}
                className='ml-1 rounded outline-none focus:bg-green-300 focus:text-zinc-900'
              />
            )}
          </DateInput>
          <Button className='ml-4 text-slate-100 hover:opacity-50 outline-none data-[focus-visible]:ring data-[focus-visible]:ring-green-300 data-[pressed]:scale-95'>
            <CalendarDaysIcon className='h-10 w-10' />
          </Button>
        </Group>
        {description && <Text slot='description'>{description}</Text>}
        <FieldError>{errorMessage}</FieldError>
        <Popover>
          <Dialog>
            <RangeCalendar
              className='mr-3 p-4 bg-zinc-800 text-slate-100 rounded-xl 
          shadow-2xl'
            >
              <header className='flex items-center mb-4'>
                <Button
                  slot='previous'
                  className='hover:opacity-50 outline-none data-[focus-visible]:ring data-[focus-visible]:ring-orange-300 data-[pressed]:scale-95'
                >
                  <ChevronLeftIcon className='h-8 w-8' />
                </Button>
                <Heading className='flex-1 text-center' />
                <Button
                  slot='next'
                  className='hover:opacity-50 outline-none data-[focus-visible]:ring data-[focus-visible]:ring-orange-300 data-[pressed]:scale-95 disabled:invisible'
                >
                  <ChevronRightIcon className='h-8 w-8' />
                </Button>
              </header>
              <CalendarGrid>
                {(date) => (
                  <CalendarCell
                    date={date}
                    className='w-10 h-10 cursor-default rounded flex items-center justify-center outline-none data-[focus-visible]:ring data-[focus-visible]:ring-orange-300 data-[disabled]:text-gray-500 hover:bg-green-300 hover:text-zinc-900  data-[disabled]:hover:bg-red-500 data-[outside-month]:hidden data-[selected]:bg-green-300 data-[selected]:text-zinc-900 data-[selected]:rounded-none data-[selection-start]:rounded-ss data-[selection-start]:rounded-es data-[selection-end]:rounded-se data-[selection-end]:rounded-ee'
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
