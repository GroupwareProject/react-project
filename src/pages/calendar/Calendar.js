import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

class Calendar extends Component {
    render() {
        return (
            <FullCalendar
                plugins={[ dayGridPlugin ]}
                initialView="dayGridMonth"
            /> 
        );
    }
}

export default Calendar;