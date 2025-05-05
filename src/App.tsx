import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Workouts from './pages/Workouts';
import Routeplanner from './pages/Routeplanner';
import Navbar from './components/Header/Navbar';

const queryClient = new QueryClient();

const App = () => {
  return (
    <div className='bg-slate-50 text-zinc-900 dark:bg-zinc-900 dark:text-slate-50'>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Workouts />} />
            <Route path='/routeplanner' element={<Routeplanner />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
};

export default App;
