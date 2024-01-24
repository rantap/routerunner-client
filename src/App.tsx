import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Workouts from './pages/Workouts';
import Routeplanner from './pages/Routeplanner';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Workouts />} />
        <Route path='/routeplanner' element={<Routeplanner />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
