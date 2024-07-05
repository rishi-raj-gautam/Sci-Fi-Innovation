import './about.css'
function About() {
    return (
        <>
            <div className="container-home" id="about">
                <div className="container text-center RowCol">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className='Aphoto'></div>
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center flex-column">
                            <div>
                                <h1 className='head'>Sci-Fi Innovation Club: Exploring the Future Today ✨</h1>
                            </div>
                            <div>
                                <p className='para mt-2'>
                                    Our vision is to create a dynamic and inclusive community at the university where students can explore the realms of science fiction and harness its power to inspire real-world innovation. We aim to foster a culture of creativity, critical thinking, and collaboration, encouraging members to dream beyond conventional boundaries and contribute to the advancement of technology and society.
                                </p>
                            </div>
                            <div className="row-f">
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="https://www.instagram.com/sci_fi.cu/?utm_source=qr&igsh=NXFlZjliNjQyYzJj" target='_blank'><i className="fa fa-instagram"></i></a>
                        <a href="#"><i className="fa fa-linkedin"></i></a>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;
