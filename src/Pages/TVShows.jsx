import React from 'react'
import Nav from '../Components/Nav'
import Rowpost from '../Components/Rowpost'
import {TVShowses} from '../Components/Urls'

function TVShows() {
  return (
    <div className='bg-[#111] h-screen'>
        <Nav/>
        <div className='pt-24'>
        <Rowpost url={TVShowses} title='TVShow' height='400' />

        </div>
    </div>
  )
}

export default TVShows