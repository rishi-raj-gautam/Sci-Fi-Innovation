import './event.css'
function Events() {
    return <>
        <div id='events'>
            <div className="container text-center pt-5">
                <div className='head'><h1>Events</h1></div>
                <div className="row mt-4">
                    <div className="col d-flex justify-content-center"><div className="card">
                        <p className="heading">
                            Ideathon (upcoming)
                        </p>

                        <p>Chandigarh University
                        </p></div></div>
                    <div className="col d-flex justify-content-center"><div className="card">
                        <p className="heading">
                            Hackathon (upcoming)
                        </p>

                        <p className="para">Chandigarh University
                        </p></div></div>
                    <div className="col d-flex justify-content-center"><div className="card">
                        <p className="heading">
                            NYA
                        </p>

                        <p className="para">Chandigarh University
                        </p></div></div>
                    <div className="col d-flex justify-content-center"><div className="card">
                        <p className="heading">
                            NYA
                        </p>

                        <p className="para">Chandigarh University
                        </p></div></div>
                </div>
            </div>
        </div>
    </>
}

export default Events;