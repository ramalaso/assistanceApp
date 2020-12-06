import '../css/App.css';
import React, { Component, useState, useEffect } from 'react';

import AddAppointments from './AddAppointments';
import ListAppointments from './ListAppointments';
import SearchAppointments from './SearchAppointments';
import axios from 'axios';
// import data from './data.json';

function App() {
  let [myAppointments, setmyAppointments] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/').then(response => {
      setmyAppointments(response.data.data);
    });
  });
  return (
    <main className="page bg-white" id="petratings">
      <div className="container">
        <div className="row">
          <div className="col-md-12 bg-white">
            <div className="container">
              <AddAppointments />
              <SearchAppointments />
              <ListAppointments appointments={myAppointments} />
              {myAppointments.map(member => <h1>{member.name}</h1>)}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
