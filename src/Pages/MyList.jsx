import React from 'react'
import Nav from '../Components/Nav'
import Rowpost from '../Components/Rowpost'
import { Action, Comedy, Horror, Romance, Thriller } from '../Components/Urls'

function MyList() {
  return (
    <div className='bg-[#111]'>
      <Nav/>
      <div className='pt-24'>
      <Rowpost url={Thriller} title='Thriller' height='400' />
      <Rowpost url={Action} title='Action' height='400' />
        <Rowpost url={Horror} title='Horror' height='400' />
        <Rowpost url={Comedy} title='Comedy' height='400' />
        <Rowpost url={Romance} title='Romance' height='400' />
      </div>
    </div>
  )
}

export default MyList