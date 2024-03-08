import axios, { AxiosError } from 'axios';
import { Workout } from '../types';

const BASE_URL = import.meta.env.VITE_API_URL;

export const fetchWorkouts = async (page: number, results: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/workouts?page=${page}&results=${results}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      handleRequestError(error);
    } else {
      console.error('Non-Axios error occurred:', error);
    }
    throw error;
  }
};

export const fetchTotals = async (startDate: string, endDate: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/total?start=${startDate}&end=${endDate}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      handleRequestError(error);
    } else {
      console.error('Non-Axios error occurred:', error);
    }
    throw error;
  }
};

export const addWorkout = async (data: Workout) => {
  try {
    const response = await axios.post(`${BASE_URL}/workouts`, data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      handleRequestError(error);
    } else {
      console.error('Non-Axios error occurred:', error);
    }
    throw error;
  }
};

export const deleteWorkout = async (id: number) => {
  try {
    const response = await axios.delete(`${BASE_URL}/workouts/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      handleRequestError(error);
    } else {
      console.error('Non-Axios error occurred:', error);
    }
    throw error;
  }
};

export const editWorkout = async (id: number, data: Workout) => {
  try {
    const response = await axios.put(`${BASE_URL}/workouts/${id}`, data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      handleRequestError(error);
    } else {
      console.error('Non-Axios error occurred:', error);
    }
    throw error;
  }
};

const handleRequestError = (error: AxiosError) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    console.error('Request failed with status code:', error.response.status);
    console.error('Response data:', error.response.data);
  } else if (error.request) {
    // The request was made but no response was received
    console.error('Request made but no response received:', error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error('Request setup error:', error.message);
  }
};
