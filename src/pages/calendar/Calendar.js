import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import './Calendar.css';
function Calendar(){
    
    const [events, setEvents] = useState([]);

    const handleEventClick = (event) => {
        if(window.confirm(`Are you sure you want to delete ${event.title}?`)) {
            setEvents((prevEvents)=>{
                const index = prevEvents.findIndex((e) => e.id === event.id);
                prevEvents.splice(index, 1);
                return [...prevEvents];
            });
        }
    };

    const handleSelect = (start, end) => {
        const title = window.prompt("Enter a title for your event:");
        if (title) {
          const newEvent = {
            id: events.length + 1,
            title: title,
            start: start,
            end: end,
          };
          setEvents([...events, newEvent]);
        }
      };

    return (
        <div style= { { width: "700px" } }>
            <FullCalendar 
                id="calendar"
                defaultView="dayGridMonth" 
                plugins={[ dayGridPlugin ]}
                headerToolbar={{
                    start: 'today',
                    center: 'title',
                    end: 'prev,next'
                }}
                defaultDate={new Date()}
                navLinks={true}
                editable={true}
                selectable={true}
                selectHelper={true}
                eventLimit={true}
                events={events}
                eventClick={handleEventClick}
                select={handleSelect}
                // events={[
                //     { title: 'event 1', date: '2023-03-14'}
                // ]}
            />
        </div>
    );
}


export default Calendar;