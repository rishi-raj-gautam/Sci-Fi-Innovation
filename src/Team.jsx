import React, { useEffect, useState } from 'react';
import './team.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img from './assets/profile/Club Secretary.jpg'
import img2 from './assets/profile/Krish.jpg'
import img3 from './assets/profile/Rishi.jpg'
import img4 from './assets/profile/Advisor.jpg'
import img5 from './assets/profile/Utkarsh.jpg'
import img6 from './assets/profile/Harsh.jpg'
import img7 from './assets/profile/Dhruv.jpg'
import img8 from './assets/profile/Aashwi.png'
import img9 from './assets/profile/Sarthak.jpg'
import img10 from './assets/profile/Ayush.jpg'
import img11 from './assets/profile/Kanishka.jpg'
import img12 from './assets/profile/Deepti.jpg'
import img13 from './assets/profile/Harshit.jpg'
import img14 from './assets/profile/Ekanshi.jpg'
import img15 from './assets/profile/Rohit.jpg'
import img16 from './assets/profile/Ashini.jpeg'
import img17 from './assets/profile/Priyanshu.jpg'

function Team() {
    const [teamMembers, setTeamMembers] = useState([]);

    const [coreTeam,setCoreTeam] = useState([]);

    useEffect(() => {
        // Mock API call
        const fetchTeamMembers = async () => {
            const data = [
                { id: 1, name: "Ashish Kumar", role: "President", photo: img },
                { id: 2, name: "Krish", role: "Vice President", photo:img2},
                { id: 3, name: "Rishi Raj Gautam", role: "Deputy Vice President", photo:img3},
                { id: 4, name: "Dr. Sartajvir Singh Dhillon", role: "Faculty Advisor", photo:img4},
                { id: 5, name: "Er. Apoorva", role: "Faculty Co-Advisor", photo:''},
            ];

            const data2 = [
                { id: 1, name: "Priyanshu Tak", role: "Technical Department", photo:img17 },
                { id: 2, name: "Rohit Kumar Giri", role: "Technical Department", photo:img15},
                { id: 3, name: "Ayush Kant", role: "Technical Department", photo:img10},
                { id: 4, name: "Ashini L J", role: "Designing", photo:img16},
                { id: 5, name: "M Dhruv Singha", role: "Finance Department", photo:img7},
                { id: 6, name: "Harsh Raj", role: "Finance Department", photo:img6},
                { id: 7, name: "Rahul Prakash", role: "Marketing & PR", photo:''},
                { id: 8, name: "Deepti Arora", role: "Marketing & PR", photo:img12},
                { id: 9, name: "Atish Kumar Shaw", role: "Media Team", photo:''},
                { id: 10, name: "Sarthak Kumar", role: "Marketing & PR", photo:img9},
                { id: 11, name: "Ekanshi", role: "Event Management Team", photo:img14},
                { id: 12, name: "Utkarsh Prakhar", role: "Event Management Team", photo:img5},
                { id: 13, name: "Kashvi Tandon", role: "Event Management Team", photo:''},
                { id: 14, name: "Kanish Rohilla", role: "Event Management Team", photo:''},
                { id: 15, name: "Aashwi Ranjan", role: "Media Team", photo:img8},
                { id: 16, name: "Harshit", role: "Finance Department", photo:img13},
                { id: 17, name: "Kanishka", role: "Finance Department", photo:img11},
            ];
            setTeamMembers(data);
            setCoreTeam(data2);
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

    var settings2 = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
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
            <div className='head mb-5'><h1>Our Team</h1></div>
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
                                <button className="card-socials-btn facebook">
                                    <svg data-name="Layer 21" height="24" id="Layer_21" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" className="icon"><title></title><path d="M16.75,9H13.5V7a1,1,0,0,1,1-1h2V3H14a4,4,0,0,0-4,4V9H8v3h2v9h3.5V12H16Z"></path></svg>
                                </button>
                                <button className="card-socials-btn github">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                                </button>
                                <button className="card-socials-btn linkedin">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="512" viewBox="0 0 512 512" height="512"><path d="m51.326 185.85h90.011v270.872h-90.011zm45.608-130.572c-30.807 0-50.934 20.225-50.934 46.771 0 26 19.538 46.813 49.756 46.813h.574c31.396 0 50.948-20.814 50.948-46.813-.589-26.546-19.551-46.771-50.344-46.771zm265.405 124.209c-47.779 0-69.184 26.28-81.125 44.71v-38.347h-90.038c1.192 25.411 0 270.872 0 270.872h90.038v-151.274c0-8.102.589-16.174 2.958-21.978 6.519-16.174 21.333-32.923 46.182-32.923 32.602 0 45.622 24.851 45.622 61.248v144.926h90.024v-155.323c0-83.199-44.402-121.911-103.661-121.911z"></path></svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </Slider>
                <br></br>
                <h4 className='para mb-3'>Core Members</h4>
                <Slider {...settings2}>
                    {coreTeam.map((member) => (
                        <div className="card-team d-flex justify-content-center align-items-center" key={member.id}>
                            <div className="card-photo" style={{ backgroundImage: `url(${member.photo})` }}></div>
                            <div className="card-title">
                                <span className='memberName para2'>{member.name}</span><br />
                                <span className='para'>{member.role}</span>
                            </div>
                            <div className="card-socials">
                                <button className="card-socials-btn facebook">
                                    <svg data-name="Layer 21" height="24" id="Layer_21" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" className="icon"><title></title><path d="M16.75,9H13.5V7a1,1,0,0,1,1-1h2V3H14a4,4,0,0,0-4,4V9H8v3h2v9h3.5V12H16Z"></path></svg>
                                </button>
                                <button className="card-socials-btn github">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                                </button>
                                <button className="card-socials-btn linkedin">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="512" viewBox="0 0 512 512" height="512"><path d="m51.326 185.85h90.011v270.872h-90.011zm45.608-130.572c-30.807 0-50.934 20.225-50.934 46.771 0 26 19.538 46.813 49.756 46.813h.574c31.396 0 50.948-20.814 50.948-46.813-.589-26.546-19.551-46.771-50.344-46.771zm265.405 124.209c-47.779 0-69.184 26.28-81.125 44.71v-38.347h-90.038c1.192 25.411 0 270.872 0 270.872h90.038v-151.274c0-8.102.589-16.174 2.958-21.978 6.519-16.174 21.333-32.923 46.182-32.923 32.602 0 45.622 24.851 45.622 61.248v144.926h90.024v-155.323c0-83.199-44.402-121.911-103.661-121.911z"></path></svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Team;
