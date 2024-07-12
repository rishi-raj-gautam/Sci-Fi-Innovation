import './about.css'
function About() {
    return (
        <>
            <div className="container-home d-flex flex-column justify-content-center align-items-center" id="about">
            <div  className='head m-4'><h1>About</h1></div>
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
                        <a href="https://www.youtube.com/channel/UCrZ84phJVmXK0o5MArsNlbQ"  target='_blank'><i className="fa fa-youtube" target='_blank'></i></a>
                        <a href="https://www.instagram.com/scifiinnovationclub/" target='_blank'><i className="fa fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/company/103704187" target='_blank'><i className="fa fa-linkedin"></i></a>
                    </div>
                        </div>
                    </div>
                </div>
                <div className='youTube container-fluid d-flex justify-content-center align-items-center m-4'>
                <iframe width="712" height="400" src="https://www.youtube.com/embed/wXIax8Zqcm8?si=-I4uycKvEdoajrhy" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></div>
                
            </div>
        </>
    )
}

export default About;
