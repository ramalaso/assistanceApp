import React from 'react';
import Appointment from './Appointment';
import '../css/list.css';

export default function ListAppointments({ appointments }) {
    return (
        <ul className="list" id="list">
            {appointments.map(appointment => <Appointment appointment={appointment} />)}
        </ul>
    );
}
