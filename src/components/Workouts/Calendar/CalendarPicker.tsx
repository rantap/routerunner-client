import {
  Button,
  Calendar,
  CalendarCell,
  CalendarGrid,
  DateInput,
  DatePicker,
  DateSegment,
  Dialog,
  FieldError,
  Group,
  Heading,
  Label,
  Popover,
} from 'react-aria-components';
import { I18nProvider } from 'react-aria';
import type { DatePickerProps, DateValue, ValidationResult } from 'react-aria-components';
import { CalendarDaysIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

interface CalendarPickerProps<T extends DateValue> extends DatePickerProps<T> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function CalendarPicker<T extends DateValue>({
  errorMessage,
  label,
  ...props
}: CalendarPickerProps<T>) {
  return (
    <I18nProvider locale='en-GB'>
      <DatePicker
        {...props}
        className='group flex flex-col gap-1 w-full data-[focus-ring]:outline-green-300'
      >
        <Label className='ml-6 text-slate-100'>{label}</Label>
        <Group className='flex mb-2 mx-4 focus:ring focus:ring-green-300'>
          <DateInput className='flex px-2 py-2 bg-zinc-900 text-slate-100 rounded-md border border-1 border-slate-100/50 w-full outline-none data-[focus-visible]:ring data-[focus-visible]:ring-green-300'>
            {(segment) => (
              <DateSegment
                className='rounded ml-1 outline-none focus:bg-green-300 focus:text-zinc-900'
                segment={segment}
              />
            )}
          </DateInput>
          <Button className='ml-4 text-slate-100 outline-none data-[focus-visible]:ring data-[focus-visible]:ring-green-300'>
            <CalendarDaysIcon className='h-10 w-10' />
          </Button>
        </Group>
        <FieldError>{errorMessage}</FieldError>
        <Popover>
          <Dialog>
            <Calendar
              className='p-4 mb-10 mr-3 bg-zinc-900 text-slate-100 rounded-xl 
         shadow-2xl'
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
                    className='w-10 h-10 cursor-default rounded flex items-center justify-center data-[disabled]:text-gray-500 hover:bg-green-300 hover:text-zinc-900  data-[disabled]:hover:bg-red-500 data-[outside-month]:hidden'
                    date={date}
                  />
                )}
              </CalendarGrid>
            </Calendar>
          </Dialog>
        </Popover>
      </DatePicker>
    </I18nProvider>
  );
}
