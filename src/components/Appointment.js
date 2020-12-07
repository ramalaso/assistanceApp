import React, { useState, useEffect } from 'react';
import '../css/list.css';
import axios from 'axios';

function Appointment({ appointment }) {
    function updateStatus(event) {
        let id = event.currentTarget.parentNode.id;
        axios.put(`http://localhost:3001/${id}`).then(response => {
            console.log(response.data.data);
            event.target.checked = !response.data.data.assistance;
        });
        console.log(event);
    }
    return (
        <li id={appointment._id}>
            <input type="checkbox" checked={appointment.assistance} id="status" onChange={(event) => { updateStatus(event); }}
            />
            <label className="label-for-check" htmlFor="idinput">
                {appointment.name}
            </label>
        </li>
    );
}
export default Appointment;
