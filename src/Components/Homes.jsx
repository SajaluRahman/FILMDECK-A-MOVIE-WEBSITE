import React from 'react'
import Nav from './Nav'
import Banner from './Banner'
import Rowpost from './Rowpost'
import {orginals,Action,Horror,Mystery,Romance,Thriller,Comedy} from '../Components/Urls'

function Homes() {
  return (
    <div className='bg-[#1d2930]  '
    style={{
      backgroundImage:
        "linear-gradient(to bottom, #1d2930,#0b1013)",
      // Vignette effect (dark border fading to transparent)
    }}>
        <Nav/>
        <Banner/>
        <Rowpost url={orginals} title='ƑìӀʍᎠҽçҟ Orginals' height='340' />
        <Rowpost url={Action} title='Action' height='300' />
        <Rowpost url={Horror} title='Horror' height='300' />
        <Rowpost url={Comedy} title='Comedy' height='300' />
        <Rowpost url={Romance} title='Romance' height='300' />
        <Rowpost url={Mystery} title='Mystery' height='300' />
        <Rowpost url={Thriller} title='Thriller' height='300' />
       
    </div>
  )
}

export default Homes