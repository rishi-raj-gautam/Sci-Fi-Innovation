import './event.css';
import React from 'react';
import Synergy from './assets/Synergy.png'; // Correct path
import { useState, useEffect } from 'react';
function Events() {



    const calculateTimeLeft = () => {
        const eventDate = new Date("Jul 13, 2024 17:00:00").getTime();
        const now = new Date().getTime();
        const distance = eventDate - now;
    
        let timeLeft = {};
    
        if (distance > 0) {
          timeLeft = {
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000)
          };
        } else {
          timeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
          };
        }
    
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        return () => clearTimeout(timer);
      });

      




    const events = [
      { id: 3, heading: 'TECH-A-HUNT', location: 'Chandigarh University' },
      { id: 2, heading: '', location: 'Chandigarh University', image: Synergy },
        { id: 1, heading: 'THINK-A-THON', location: 'Chandigarh University' },
        { id: 4, heading: 'N/A', location: 'Chandigarh University' },
    ];

    return (
        <div id='events'>
            <div className="container text-center pt-5">
                <div className='head'><h1>Events</h1></div>
                <div className="row mt-4">
                    {events.map((event) => (
                        <div key={event.id} className="col d-flex justify-content-center">
                            <div className={`card ${event.id === 1 ? 'special-card' : ''} ${event.id === 2 ? 'special-card2' : ''} ${event.id === 3 ? 'special-card3' : ''} `} >
                            {event.id === 2 && <img src={event.image} alt="Event" className="event-image" />}
                                <p className="heading">{event.heading}</p>
                                <p className="para location">{event.location}</p>
                                {event.id==2?<a className=""><button className="btn-form">Closed</button></a>:""}
                                {event.id==1?<a className=""><button className="btn-form">Closed</button></a>:""}
                                {event.id==3?<a className=""><button className="btn-form">Closed</button></a>:""}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Events;
