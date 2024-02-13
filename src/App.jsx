
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import { Suspense, lazy } from 'react';
import './App.css'
import { NavBar } from './components/NavBar'
import { MovieCast } from './components/MovieCast';
import { MovieReviews } from './components/MovieReviews';
import { CirclesWithBar } from 'react-loader-spinner';

const HomePage = lazy(() => import('./Pages/HomePage'))
const MoviePage = lazy(() => import('./Pages/MoviePage'))
const MovieDetailsPage = lazy(() => import('./Pages/MovieDetailsPage'))
const NotFoundPage = lazy(() => import('./Pages/NotFoundPage'))



function App() {
  return (
    <div>
      <Toaster position="top-left"/>
      <NavBar/>
    
      <Suspense fallback={<CirclesWithBar
  height="100"
  width="100"
  color="#4fa94d"
  outerCircleColor="#4fa94d"
  innerCircleColor="#4fa94d"
  barColor="#4fa94d"
  ariaLabel="circles-with-bar-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
      />}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movie' element={<MoviePage />} />
        <Route path='/movie/:movieID' element={<MovieDetailsPage />}>
          <Route path='cast' element={<MovieCast/>} />
          <Route path='reviews' element={<MovieReviews/>} />
        </Route>
        <Route path='*' element={<NotFoundPage/>} />
        </Routes>
        </Suspense>
    </div>
  )
}

export default App
