import React, { useEffect, useState } from 'react';
import './team.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

import img from './assets/profile/Club Secretary.jpg'
import img2 from './assets/profile/Krish.jpg'
import img3 from './assets/profile/Rishi.jpg'
import img4 from './assets/profile/Advisor.jpg'
import img5 from './assets/profile/Apoorva.jpg'

function Team() {
    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        // Mock API call
        const fetchTeamMembers = async () => {
            const data = [
                { id: 1, name: "Ashish Kumar", role: "President", photo: img, github: "https://github.com/ashish", linkedin: "https://linkedin.com/in/ashish", instagram: "https://instagram.com/ashish" },
                { id: 2, name: "Krish", role: "Vice President", photo: img2, github: "https://github.com/Krish-Gauttam", linkedin: "https://www.linkedin.com/in/krish-177a5a276", instagram: "https://www.instagram.com/krish_gauttam?igsh=MXA4NHg0amowOXN6Ng==" },
                { id: 3, name: "Rishi Raj Gautam", role: "Deputy Vice President", photo: img3, github: "https://github.com/rishi-raj-gautam", linkedin: "https://www.linkedin.com/in/rishi-raj-gautam-232221276/", instagram: "https://www.instagram.com/___rishi__raj___/" },
                { id: 4, name: "Dr. Sartajvir Singh Dhillon", role: "Faculty Advisor", photo: img4, github: "", linkedin: "https://linkedin.com/in/sartajvir", instagram: "" },
                { id: 5, name: "Er. Apoorva", role: "Faculty Co-Advisor", photo: img5, github: "", linkedin: "https://linkedin.com/in/apoorva", instagram: "" },
            ];

            setTeamMembers(data);
        };

        fetchTeamMembers();
    }, []);

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="container-team d-flex flex-column justify-content-center align-items-center" id="team">
            <div className='head mb-5'><h1>OurTeam</h1></div>
            <div className='slider'>
                <h4 className='para mb-3'>Executive Board</h4>
                <Slider {...settings}>
                    {teamMembers.map((member) => (
                        <div className="card-team d-flex justify-content-center align-items-center" key={member.id}>
                            <div className="card-photo" style={{ backgroundImage: `url(${member.photo})` }}></div>
                            <div className="card-title">
                                <span className='memberName para2'>{member.name}</span><br />
                                <span className='para'>{member.role}</span>
                            </div>
                            <div className="card-socials">
                            <a href={member.instagram} className="card-socials-btn instagram" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.335 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.335 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.335-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.335-2.633 1.31-3.608.975-.975 2.242-1.248 3.608-1.31 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.667.014-4.947.072-1.391.062-2.625.35-3.637 1.362-1.012 1.012-1.3 2.246-1.362 3.637-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.062 1.391.35 2.625 1.362 3.637 1.012 1.012 2.246 1.3 3.637 1.362 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.391-.062 2.625-.35 3.637-1.362 1.012-1.012 1.3-2.246 1.362-3.637.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.062-1.391-.35-2.625-1.362-3.637-1.012-1.012-2.246-1.3-3.637-1.362-1.28-.058-1.688-.072-4.947-.072z"/><path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.999 3.999 3.999 0 0 1 0 7.999z"/><circle cx="18.406" cy="5.594" r="1.44"/></svg>
                                    </a>
                                    <a href={member.github} className="card-socials-btn github" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                                    </a>
                                    <a href={member.linkedin} className="card-socials-btn linkedin" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.14 19h-3.16v-10h3.16v10zm-1.58-11.31c-1.01 0-1.81-.81-1.81-1.81 0-1.01.81-1.81 1.81-1.81s1.81.81 1.81 1.81c0 1-.81 1.81-1.81 1.81zm12.72 11.31h-3.16v-4.95c0-1.18-.02-2.7-1.65-2.7-1.65 0-1.9 1.29-1.9 2.62v5.02h-3.15v-10h3.03v1.37h.04c.42-.8 1.45-1.64 2.99-1.64 3.19 0 3.78 2.1 3.78 4.82v5.45z"></path></svg>
                                    </a>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <Link to='/moreteam' className='team'>
                <button className="btn mt-4" type="button">
                    <strong>Core Team</strong>
                    <div id="container-stars">
                        <div id="stars"></div>
                    </div>
                    <div id="glow">
                        <div className="circle"></div>
                        <div className="circle"></div>
                    </div>
                </button>
            </Link>
        </div>
    );
}

export default Team;
