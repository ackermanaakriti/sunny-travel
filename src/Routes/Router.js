import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Destination from '../Pages/Destination'
import Homepage from '../Pages/Homepage'
import DetailofTrip from '../Pages/DetailofTrip'
const Routers = () => {
  return (
  <>
  <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/destination' element={<Destination/>}/>
    <Route path='detailoftrip' element={<DetailofTrip/>}/>
  </Routes>
  </>
  )
}

export default Routers