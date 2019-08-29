import React from 'react'
import Timetable from './Timetable'
import './App.css'

function App() {
  const stopTimes = [
    {
      route: 'Bussi 123',
      time: '12:55',
    },
    {
      route: 'Metro M1',
      time: '12:58',
    },
    {
      route: 'Metro M1',
      time: '13:02',
    },
    {
      route: 'Bussi 123',
      time: '13:05',
    },
  ]

  return (
    <div className="App">
      <h1>Aikataulu</h1>
      <Timetable stopTimes={stopTimes}/>
    </div>
  );
}

export default App
