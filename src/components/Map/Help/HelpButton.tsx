import { DialogTrigger, Button } from 'react-aria-components';
import { HelpPopover } from './HelpPopover';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid';

export const HelpButton = () => {
  return (
    <DialogTrigger>
      <Button
        aria-label='Help'
        className='text-slate-100 rounded-full sm:hover:opacity-50 outline-none data-[focus-visible]:ring data-[focus-visible]:ring-orange-300'
      >
        <QuestionMarkCircleIcon className='w-8 h-8' />
      </Button>
      <HelpPopover className='p-6 bg-zinc-800 rounded-lg w-5/6 sm:w-fit shadow-2xl'>
        <span className='text-center text-slate-100'>
          <p>Plan your route by creating waypoints on the map:</p>
          <br />
          <ul className='text-left mx-10 list-disc'>
            <li>Touch/click the desired spot to create a waypoint</li>
            <li>Touch/click a waypoint to remove it</li>
          </ul>
        </span>
      </HelpPopover>
    </DialogTrigger>
  );
};
