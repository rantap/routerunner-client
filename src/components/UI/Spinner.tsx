export const Spinner = () => {
  return (
    <div
      className='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-violet-800 motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-green-300'
      role='status'
    ></div>
  );
};
