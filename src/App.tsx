import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Workouts from './pages/Workouts';
import Home from './pages/Home';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/workouts' element={<Workouts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
