import React from 'react';

export default function ListAppointments({ appointments }) {
    return (
        <div element>
            {appointments.map(apt => <h1>{apt.petName}</h1>)}
        </div>
    );
}
