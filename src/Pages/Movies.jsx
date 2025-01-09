import React from 'react'
import Rowpost from '../Components/Rowpost'
import {orginals,Action,Horror,Mystery,Romance,Thriller,crime,animation,Adventure,Comedy,Drama,Family,History,War,Western, Music} from '../Components/Urls'
import Nav from '../Components/Nav'

function Movies() {
  return (
    <div className='bg-[#111]'> 
    <Nav/>
        <div className='mt-[58px]'>
        <Rowpost url={orginals} title='ƑìӀʍᎠҽçҟ Orginals' height='340' />
    <Rowpost url={Action} title='Action' height='300' />
    <Rowpost url={Horror} title='Horror' height='300' />
    <Rowpost url={Comedy} title='Comedy' height='300' />
    <Rowpost url={Romance} title='Romance' height='300' />
    <Rowpost url={Mystery} title='Mystery' height='300' />
    <Rowpost url={Thriller} title='Thriller' height='300' />
    <Rowpost url={crime} title='Crime' height='300' /> 
    <Rowpost url={Music} title='Music' height='300' />
    <Rowpost url={animation} title='Animation' height='300' />
    <Rowpost url={Adventure} title='Adventure' height='300' />
    <Rowpost url={Drama} title='Drama' height='300' />
    <Rowpost url={Family} title='Family' height='300' />
    <Rowpost url={History} title='History' height='300' />
    <Rowpost url={War} title='War' height='300' />
    <Rowpost url={Western} title='Western' height='300' />
   
  
        </div>
    </div>
  )
}

export default Movies
