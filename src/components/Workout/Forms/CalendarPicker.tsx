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
import type { DatePickerProps, DateValue, ValidationResult } from 'react-aria-components';

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
    <DatePicker {...props} className='group flex flex-col gap-1 w-4/5'>
      <Label className='ml-6 text-slate-100'>{label}</Label>
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
      <FieldError>{errorMessage}</FieldError>
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
}
