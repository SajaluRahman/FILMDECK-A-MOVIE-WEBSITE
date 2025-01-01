import React from 'react'
import Nav from '../Components/Nav'
import Rowpost from '../Components/Rowpost'
import { crime } from '../Components/Urls'

function NewPopular() {
  return (
    <div className='bg-[#111] h-screen '>
        <Nav/>
        <div className='pt-28'>
        <Rowpost url={crime} title='Popular' height='400' />
        </div>
        </div>
  )
}

export default NewPopular