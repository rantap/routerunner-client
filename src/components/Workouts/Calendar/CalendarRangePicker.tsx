import {
  CalendarDaysIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/solid';
import type {
  DateRangePickerProps,
  DateValue,
  ValidationResult,
} from 'react-aria-components';
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

interface CalendarRangePickerProps<T extends DateValue>
  extends DateRangePickerProps<T> {
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
        className='group flex w-full flex-col gap-1 text-zinc-900 data-[focus-ring]:outline-green-300'
      >
        <Label className='ml-6 bg-zinc-800 dark:text-slate-100'>{label}</Label>
        <Group className='text-zinc-900justify-center mb-2 flex focus:ring focus:ring-green-300'>
          <DateInput
            slot='start'
            className='flex w-full rounded border border-zinc-900 bg-slate-50 px-2 py-2 text-zinc-900 data-[focus-visible]:ring data-[focus-within]:ring data-[focus-visible]:ring-violet-800 data-[focus-within]:ring-violet-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-slate-100 dark:data-[focus-visible]:ring-green-300 dark:data-[focus-within]:ring-green-300'
          >
            {(segment) => (
              <DateSegment
                segment={segment}
                className='ml-1 rounded outline-none focus:bg-violet-300 focus:text-zinc-900 dark:focus:bg-green-300'
              />
            )}
          </DateInput>
          <span aria-hidden='true' className='mx-2 my-auto'>
            to
          </span>
          <DateInput
            slot='end'
            className='flex w-full rounded border border-zinc-900 bg-slate-50 px-2 py-2 text-zinc-900 data-[focus-visible]:ring data-[focus-within]:ring data-[focus-visible]:ring-violet-800 data-[focus-within]:ring-violet-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-slate-100 dark:data-[focus-visible]:ring-green-300 dark:data-[focus-within]:ring-green-300'
          >
            {(segment) => (
              <DateSegment
                segment={segment}
                className='ml-1 rounded outline-none focus:bg-violet-300 focus:text-zinc-900 dark:focus:bg-green-300'
              />
            )}
          </DateInput>
          <Button className='ml-4 text-zinc-900 outline-none hover:opacity-50 data-[pressed]:scale-95 data-[focus-visible]:ring data-[focus-visible]:ring-green-300 dark:text-slate-100'>
            <CalendarDaysIcon className='h-10 w-10' />
          </Button>
        </Group>
        {description && <Text slot='description'>{description}</Text>}
        <FieldError>{errorMessage}</FieldError>
        <Popover>
          <Dialog>
            <RangeCalendar className='mr-3 rounded-xl bg-slate-50 p-4 text-zinc-900 shadow-2xl dark:bg-zinc-800 dark:text-slate-100'>
              <header className='mb-4 flex items-center'>
                <Button
                  slot='previous'
                  className='outline-none hover:opacity-50 data-[pressed]:scale-95 data-[focus-visible]:ring data-[focus-visible]:ring-orange-300'
                >
                  <ChevronLeftIcon className='h-8 w-8' />
                </Button>
                <Heading className='flex-1 text-center' />
                <Button
                  slot='next'
                  className='outline-none hover:opacity-50 disabled:invisible data-[pressed]:scale-95 data-[focus-visible]:ring data-[focus-visible]:ring-orange-300'
                >
                  <ChevronRightIcon className='h-8 w-8' />
                </Button>
              </header>
              <CalendarGrid>
                {(date) => (
                  <CalendarCell
                    date={date}
                    className='flex h-10 w-10 cursor-default items-center justify-center rounded outline-none hover:bg-violet-800 hover:text-slate-50 data-[outside-month]:hidden data-[selected]:rounded-none data-[selection-end]:rounded-ee data-[selection-end]:rounded-se data-[selection-start]:rounded-es data-[selection-start]:rounded-ss data-[selected]:bg-violet-800 data-[disabled]:text-gray-500 data-[selected]:text-slate-50 data-[focus-visible]:ring data-[focus-visible]:ring-orange-300 data-[disabled]:hover:bg-red-500 dark:hover:bg-green-300 dark:hover:text-zinc-900 dark:data-[selected]:bg-green-300 dark:data-[selected]:text-zinc-900'
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
