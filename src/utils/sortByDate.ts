import { Workout } from '../types';

// Sort given array from newest to oldest by workout date
export const sortByDate = (array: Array<Workout>) => {
  // Create copy of the original array to avoid mutation
  const copyArray = [...array];

  copyArray.sort((a, b) => {
    const c = new Date(a.date);
    const d = new Date(b.date);
    // Sort in descending order by time
    return d.getTime() - c.getTime();
  });

  return copyArray;
};
