import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/homepage';
import Sermons from './pages/videos';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} >
        <Route index element={<HomePage />} />
        <Route path='sermons' element={<Sermons />} />
      </Route>
    </Routes>
  );
}

export default App;
