import { Dialog, OverlayArrow, Popover, type PopoverProps } from 'react-aria-components';

interface HelpPopoverProps extends Omit<PopoverProps, 'children'> {
  children: React.ReactNode;
}

export function HelpPopover({ children, ...props }: HelpPopoverProps) {
  return (
    <Popover {...props}>
      <OverlayArrow className='fill-zinc-800 stroke-zinc-800 dark:fill-slate-100 dark:stroke-slate-100 '>
        <svg width={12} height={12} viewBox='0 0 12 16'>
          <path d='M0 0 L6 6 L12 0' />
        </svg>
      </OverlayArrow>
      <Dialog className='outline-none'>{children}</Dialog>
    </Popover>
  );
}
