import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { fetchTotals, fetchWorkouts } from '../api/workouts';

export const useWorkouts = (page: number, results: number) =>
  useQuery({
    queryKey: ['workouts', page, results],
    queryFn: () => fetchWorkouts(page, results),
    placeholderData: keepPreviousData,
  });
export const useTotalWorkouts = (start: string, end: string) =>
  useQuery({
    queryKey: ['workouts'],
    queryFn: () => fetchTotals(start, end),
    enabled: false,
    retry: false,
  });
