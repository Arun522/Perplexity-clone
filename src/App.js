import './App.css';
import Home from './pages/Home';
import Library from './pages/Library'
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Discover from './pages/Discover';
import NewThread from './components/NewThread';



function App() {
  return (
    <>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/library' element={<Library/>} />
        <Route path='/discover' element={<Discover />} />
      </Routes>
    </>
  );
}

export default App;
