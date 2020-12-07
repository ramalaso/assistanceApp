import React, { useState, useEffect } from 'react';
import '../css/list.css';
import axios from 'axios';




function Appointment({ appointment }) {
    const [isChecked, setIsChecked] = useState(true);

    function updateStatus(id) {
        axios.put(`http://localhost:3001/${id}`).then(response => {
            console.log(id);
        });
    }
    // setIsChecked(appointment.assistance);
    return (
        <li id={appointment._id}>
            <input type="checkbox" checked={appointment.assistance} id="status" onChange={(event) => { setIsChecked(event.currentTarget.checked); updateStatus(event.currentTarget.parentNode.id); }}
            />
            <label className="label-for-check" htmlFor="idinput">
                {appointment.name}
            </label>
        </li>
    );
}
export default Appointment;
