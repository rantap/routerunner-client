import axios from 'axios';
import { Workout } from '../types';

const BASE_URL = import.meta.env.VITE_LOCAL_API_URL;

export const fetchWorkouts = async (page: number, results: number) => {
  const response = await axios.get(`${BASE_URL}/workouts?page=${page}&results=${results}`);
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
export const editWorkout = async (id: number, data: Workout) => {
  const response = await axios.put(`${BASE_URL}/workouts/${id}`, data);
  const workout = response.data;

  return workout;
};
