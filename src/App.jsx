
import './App.css'
import Home from './components/Home'
import MovieDetails from './components/MovieDetails'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { SectionProvider } from "./contexts/SectionContext";
import { SearchContextProvieder } from './contexts/SearchContext';
import TvShowDetails from './components/TvShowDetails';
import Gener from './components/subGroup/Gener';
import SearchedMovies from './components/SearchedMovies';

function App() {

  return (
    <SectionProvider>
    <SearchContextProvieder>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/movie/:id' element={<MovieDetails/>}/>
        <Route path='/tvshow/:id' element={<TvShowDetails />}/>
        <Route path='/detail/:id' element={<MovieDetails />}/>
        <Route path='/gener/:id' element={<Gener />}/>
        <Route path='/search' element={<SearchedMovies />}/>
      </Routes>
    </Router>
    </SearchContextProvieder>
    </SectionProvider>
  )
}

export default App
