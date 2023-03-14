import { FcPlus } from "react-icons/fc"
// import { navigate } from "react-router-dom";
import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import './Calendar.css';
class Calendar extends Component {
    
    render() {
        return (
            <div style= { { width: "700px" } }>
                <FullCalendar 
                    defaultView="dayGridMonth" 
                    plugins={[ dayGridPlugin ]}
                    headerToolbar={{
                        start: 'today',
                        center: 'title',
                        end: 'prev,next'
                    }}
                    // height = '80vh'
                    events={[
                        { title: 'event 1', date: '2023-03-14'}
                    ]}
                />
                {/* <button 
                    style={{ backgroundColor: "white" }}
                    // onClick={ () => navigate("/addTodo") }
                >
                    <FcPlus />일정추가
                </button> */}
            </div>
        );
    }
}

export default Calendar;