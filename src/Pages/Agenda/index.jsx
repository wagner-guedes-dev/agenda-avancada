
import * as React from 'react';
import { useState, useEffect } from 'react';
import './admin.css'

import { signOut } from 'firebase/auth'
import { auth, db } from '../../firebaseConnection'


import Calendar from 'react-calendar';
import './CustomCalendar.css';



import {
    addDoc,
    collection,
    onSnapshot,
    query,
    orderBy,
    where,
    doc,
    deleteDoc,
    updateDoc 
} from 'firebase/firestore'
import Tasks from './components/Tasks';





function Admin(){

     //deslogar
     async function handleLogout(){
        await signOut(auth)
    }

    const [date, setDate] = React.useState(new Date());
    const [selectedDate, setSelectedDate] = React.useState(null);
    const [dayActual, setDayActual] = useState('')

    const handleDateChange = (date) => {
        setDate(date);
        setDayActual(date.toString())
    }

    const handleTileClick = (date, view) => {
        setSelectedDate(date);
    };
    
    //style ao clicar
    const tileClassName = ({ date }) => {
        if (selectedDate && date.getTime() === selectedDate.getTime()) {
          return 'selected-tile';
        }
        return null;
      };
      //limit do calendario
    const minDate = new Date(2023, 0, 1); // 1º de janeiro de 2023
    const maxDate = new Date(2025, 0, 31); // 31 de janeiro de 2025

      
    return(
        <div className='container'>
            <div className='container-agenda'>
                <div>
                    <h1>Agenda</h1>
                    <Calendar 
                        onChange={handleDateChange} 
                        value={date} 
                        minDate={minDate}
                        maxDate={maxDate}
                        onClickDay={handleTileClick}
                        tileClassName={tileClassName}
                        />
                    {dayActual}
                </div>
                
                <div className='aboutUser'>
                    <h3>Seja bem-vindo(a) Usuario</h3>
                    <button onClick={handleLogout} className='btn-logout'>
                        Sair
                    </button>
                </div>    
            </div>
            <Tasks/>
            
        </div>
    )
}

export default Admin