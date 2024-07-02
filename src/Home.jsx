import './home.css'
function Home() {
    return <>
        <div className="" id="home">
            <div className="shade d-flex justify-content-center align-items-center flex-column">
            <div className='logo-h'></div>
                <div className='head'><h1>Future Fun</h1></div>
                <div className="para"><h2>Join us today and embark on an exciting journey to explore the future through creativity, innovation, and science fiction!</h2></div>
                <a href='https://forms.gle/cDS1z8HPgRZuvbSg9' target='_blank'><button className="btn mt-2" type="button">
                    <strong>Join Now</strong>
                    <div id="container-stars">
                        <div id="stars"></div>
                    </div>

                    <div id="glow">
                        <div className="circle"></div>
                        <div className="circle"></div>
                    </div>
                </button> </a>
            </div>
        </div>
    </>
}

export default Home;