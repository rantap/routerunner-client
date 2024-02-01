import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;

export const fetchWorkouts = async () => {
  const response = await axios.get(`${BASE_URL}/workouts`);
  const workouts = response.data;

  return workouts;
};
