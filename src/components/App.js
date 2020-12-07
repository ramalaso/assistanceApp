import '../css/list.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListAppointments from './ListAppointments';

function App() {
  let [myAppointments, setmyAppointments] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/').then(response => {
      setmyAppointments(response.data.data);
    });
  }, []);

  function showAssistents() {
    axios.get('http://localhost:3001/').then(response => {
      setmyAppointments(response.data.data.filter(appointment => appointment.assistance));
    });
  }

  function showNoAssistents() {
    axios.get('http://localhost:3001/').then(response => {
      setmyAppointments(response.data.data.filter(appointment => !appointment.assistance));
    });
  }

  function showAll() {
    axios.get('http://localhost:3001/').then(response => {
      setmyAppointments(response.data.data);
    });
  }


  return (
    <>
      <h1>Lista de asistencia</h1>
      <button onClick={showAssistents}>Lista de asistentes</button>
      <button onClick={showNoAssistents}>Lista de no asistentes</button>
      <button onClick={showAll}>Lista de todos</button>
      <ListAppointments appointments={myAppointments} />
    </>
  );
};

export default App;
