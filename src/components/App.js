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
  });


  return (
    <>
      <h1>Lista de asistencia</h1>
      {/* <ul className="list" id="list">
        {
          myAppointments.map(appointment => {
            return (
              <li key={appointment._id}>
                <input type="checkbox" id="status" onChange={e => updateStatus(appointment._id)} />
                <label className="label-for-check" htmlFor="idinput">
                  {appointment.name}
                </label>
              </li>
            );
          })
        }
      </ul>; */}
      <ListAppointments appointments={myAppointments} />
    </>
  );
};

export default App;
