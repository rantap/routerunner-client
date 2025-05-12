import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Workouts from './pages/Workouts';
import Routeplanner from './pages/Routeplanner';
import Navbar from './components/Header/Navbar';
import { useState } from 'react';

const queryClient = new QueryClient();

const App = () => {
  const [isDark, setIsDark] = useState(() =>
    typeof window !== 'undefined'
      ? document.documentElement.classList.contains('dark')
      : false,
  );

  const handleToggle = (isDark: boolean) => {
    setIsDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar onToggle={handleToggle} isDark={isDark} />
        <Routes>
          <Route path='/' element={<Routeplanner />} />
          <Route path='/workouts' element={<Workouts isDark={isDark} />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
