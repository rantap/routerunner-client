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
  Text,
  Popover,
} from 'react-aria-components';
import { I18nProvider } from 'react-aria';
import type {
  DatePickerProps,
  DateValue,
  ValidationResult,
} from 'react-aria-components';
import {
  CalendarDaysIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/solid';

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
      <DatePicker {...props} className='group flex w-full flex-col gap-1'>
        <Label className='ml-6 text-zinc-900 dark:text-slate-100'>
          {label}
        </Label>
        <Group className='mx-4 mb-2 flex dark:text-slate-300'>
          <DateInput className='flex w-full rounded border border-zinc-900 bg-slate-50 px-2 py-2 text-zinc-900 outline-none data-[focus-visible]:ring data-[focus-within]:ring data-[focus-visible]:ring-violet-500 data-[focus-within]:ring-violet-800 dark:border-zinc-600 dark:bg-zinc-700 dark:text-slate-100 dark:data-[focus-visible]:ring-green-300 dark:data-[focus-within]:ring-green-300'>
            {(segment) => (
              <DateSegment
                className='ml-1 rounded outline-none focus:bg-violet-300 focus:text-zinc-900 dark:focus:bg-green-300'
                segment={segment}
              />
            )}
          </DateInput>
          <Button className='ml-4 outline-none hover:opacity-50 data-[pressed]:scale-95 data-[focus-visible]:ring data-[focus-visible]:ring-violet-800 dark:data-[focus-visible]:ring-green-300'>
            <CalendarDaysIcon className='h-10 w-10 text-zinc-900 dark:text-slate-100' />
          </Button>
        </Group>
        <FieldError className='ml-5 text-red-500'>{errorMessage}</FieldError>
        <Popover>
          <Dialog>
            <Calendar className='mb-10 mr-3 rounded-xl bg-slate-50 p-4 text-zinc-900 shadow-2xl dark:bg-zinc-800 dark:text-slate-100'>
              <header className='mb-4 flex items-center'>
                <Button
                  className='outline-none hover:opacity-50 data-[pressed]:scale-95 data-[focus-visible]:ring data-[focus-visible]:ring-orange-300'
                  slot='previous'
                >
                  <ChevronLeftIcon className='h-8 w-8' />
                </Button>
                <Heading className='flex-1 text-center' />
                <Button
                  className='outline-none hover:opacity-50 disabled:invisible data-[pressed]:scale-95 data-[focus-visible]:ring data-[focus-visible]:ring-orange-300'
                  slot='next'
                >
                  <ChevronRightIcon className='h-8 w-8' />
                </Button>
              </header>
              <CalendarGrid>
                {(date) => (
                  <CalendarCell
                    className='flex h-10 w-10 cursor-default items-center justify-center rounded outline-none hover:bg-violet-800 hover:text-slate-50 data-[outside-month]:hidden data-[disabled]:text-gray-500 data-[focus-visible]:ring data-[focus-visible]:ring-violet-800 data-[disabled]:hover:bg-red-500 dark:hover:bg-green-300 dark:hover:text-zinc-900 dark:data-[focus-visible]:ring-green-300'
                    date={date}
                  />
                )}
              </CalendarGrid>
              <Text slot='errorMessage' />
            </Calendar>
          </Dialog>
        </Popover>
      </DatePicker>
    </I18nProvider>
  );
}
