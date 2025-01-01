import React from 'react'
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom'

import Movies from './Pages/Movies'
import Home2 from './Pages/Home2'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import TVShows from './Pages/TVShows'
import NewPopular from './Pages/NewPopular'
import MyList from './Pages/MyList'



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Home2' element={<Home2/>} />
          <Route path='/Movies' element={<Movies/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/SignUp' element={<Signup/>} />
          <Route path='/TVSHows' element={<TVShows/>} />
          <Route path='/NewPopular' element={<NewPopular/>} />
          <Route path='/MyList' element={<MyList/>} />



        </Routes>
      </Router>
    </div>
  )                                   
}
 
export default App   