import { Switch } from 'react-aria-components';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

type Props = {
  onToggle: (isDark: boolean) => void;
  isDark: boolean;
};

export const ThemeSwitch = ({ onToggle, isDark }: Props) => {
  const handleToggle = () => {
    const newMode = !isDark;
    onToggle(newMode); // Toggle dark mode
  };

  return (
    <Switch
      isSelected={isDark}
      onChange={handleToggle}
      className='ml-3 mt-6 flex items-center gap-2 text-[--text-color] lg:ml-8 lg:mt-0'
    >
      {({ isSelected }) => (
        <>
          <SunIcon className='h-6 w-6' />
          <div
            className={[
              'relative flex h-[1.15rem] w-8 items-center rounded-full border-2 transition-all duration-200',
              isSelected
                ? 'border-[--highlight-background] bg-[--highlight-background]'
                : 'border-[--border-color] bg-[--background-color]',
            ].join(' ')}
          >
            <span
              className={[
                'absolute m-[0.1rem] h-[0.85rem] w-[0.85rem] transform rounded-[16px] transition-all duration-200',
                isSelected
                  ? 'translate-x-full bg-[--field-background]'
                  : 'translate-x-0 bg-[--highlight-background]',
              ].join(' ')}
            />
          </div>
          <MoonIcon className='h-5 w-5' />
        </>
      )}
    </Switch>
  );
};
