import './event.css';
import React from 'react';

function Events() {
    const events = [
        { id: 1, heading: 'Ideathon (upcoming)', location: 'Chandigarh University' },
        { id: 2, heading: 'Hackathon (upcoming)', location: 'Chandigarh University' },
        { id: 3, heading: 'NYA', location: 'Chandigarh University' },
        { id: 4, heading: 'NYA', location: 'Chandigarh University' },
    ];

    return (
        <div id='events'>
            <div className="container text-center pt-5">
                <div className='head'><h1>Events</h1></div>
                <div className="row mt-4">
                    {events.map((event) => (
                        <div key={event.id} className="col d-flex justify-content-center">
                            <div className="card">
                                <p className="heading">{event.heading}</p>
                                <p className="para">{event.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Events;
