
import Join from './Join';
import './navbar.css'
function Navbar() {
    return <>
        <nav className="navbar navbar-expand-lg navbar-dark container-fluid"  id="navBar">
            <div className="container-fluid">
                <div className='container logo'>
                </div>
                <a className="navbar-brand" href="">
                    Sci-Fi Innovation Club</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav ">
                        <a className="nav-link active" aria-current="page" href="#home">Home</a>
                        <a className="nav-link active" aria-current="page" href="#about">About</a>
                        <a className="nav-link active" aria-current="page" href="#events">Events</a>
                        <a className="nav-link active" aria-current="page" href="#team">Our Team</a>

                       <button className="animated-button"  data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <span>Join Now</span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    </>
}

export default Navbar;