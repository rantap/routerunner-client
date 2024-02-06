import axios from 'axios';
import { Workout } from '../types';

const BASE_URL = import.meta.env.VITE_API_URL;

export const fetchWorkouts = async () => {
  const response = await axios.get(`${BASE_URL}/workouts`);
  const workouts = response.data;

  return workouts;
};

export const addWorkout = async (data: Workout) => {
  const response = await axios.post(`${BASE_URL}/workouts`, data);
  const workout = response.data;

  return workout;
};
export const deleteWorkout = async (id: number) => {
  const response = await axios.delete(`${BASE_URL}/workouts/${id}`);
  const workout = response.data;

  return workout;
};
