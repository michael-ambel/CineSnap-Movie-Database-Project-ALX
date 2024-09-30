
import './App.css'
import Home from './components/Home'
import MovieDetails from './components/MovieDetails'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { SectionProvider } from "./contexts/SectionContext";
import { SearchContextProvieder } from './contexts/SearchContext';

function App() {

  return (
    <SectionProvider>
    <SearchContextProvieder>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/detail/:id' element={<MovieDetails/>}/>
      </Routes>
    </Router>
    </SearchContextProvieder>
    </SectionProvider>
  )
}

export default App
