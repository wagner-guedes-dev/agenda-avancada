import { Routes, Route } from 'react-router-dom'

import Home from '../Pages/Home'
import Register from '../Pages/Register'
import Agenda from '../Pages/Agenda'

import Privete from './Privete'

function RoutesApp(){
    return(
        <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='/register' element={ <Register/> }/>
            
            <Route path='/agenda' element={ <Privete> <Agenda/> </Privete> }/>
        </Routes>
    )
}

export default RoutesApp