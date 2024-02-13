
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import './App.css'
import HomePage from './Pages/HomePage'
import MoviePage from './Pages/MoviePage'
import { NavBar } from './components/NavBar'
import NotFoundPage from './Pages/NotFoundPage'
import MovieDetailsPage from './Pages/MovieDetailsPage'
import { MovieCast } from './components/MovieCast';

function App() {

  
  return (
    <div>
      <Toaster position="top-left"/>
      <NavBar/>
    
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movie' element={<MoviePage />} />
        <Route path='/movie/:movieID' element={<MovieDetailsPage />}>
          <Route path='cast' element={<MovieCast/>} />
          <Route path='reviews' element={<div>reviews</div>} />
        </Route>
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>
    </div>
  )


}

export default App
