import { useState, useEffect } from "react";
import img5 from './assets/profile/Utkarsh.jpg';
import img6 from './assets/profile/Harsh.jpg';
import img7 from './assets/profile/Dhruv.jpg';
import img8 from './assets/profile/Aashwi.png';
import img9 from './assets/profile/Sarthak.jpg';
import img10 from './assets/profile/Ayush.jpg';
import img11 from './assets/profile/Kanishka.jpg';
import img12 from './assets/profile/Deepti.jpg';
import img13 from './assets/profile/Harshit.jpg';
import img14 from './assets/profile/Ekanshi.jpg';
import img15 from './assets/profile/Rohit.jpg';
import img16 from './assets/profile/Ashini.jpeg';
import img17 from './assets/profile/Priyanshu.jpg';
import img18 from './assets/profile/Atish.jpg';
import img19 from './assets/profile/Kashvi.jpg';
import img20 from './assets/profile/Rahul.jpg';
import img21 from './assets/profile/Rajan.jpg';
import img22 from './assets/profile/Kartik.png';
import img23 from './assets/profile/Lakshika.jpeg';
import img24 from './assets/profile/Akash.jpg';
import img25 from './assets/profile/Sagar.jpg';
import img26 from './assets/profile/Ananya.jpg';
import img27 from './assets/profile/Satyam.jpg';
import img28 from './assets/profile/Rashad.jpg';
import img29 from './assets/profile/Kanish.jpg';
import img30 from './assets/profile/Adith.jpg';
import img31 from './assets/profile/palak.jpeg';
import img32 from './assets/profile/Nidhi.jpg';
import img33 from './assets/profile/Manleen.jpg';

import './moreTeam.css';

function MoreTeam() {
    const [coreTeam, setCoreTeam] = useState([]);

    useEffect(() => {
        // Mock API call
        const fetchTeamMembers = async () => {
            const data2 = [
                { id: 1, name: "Priyanshu Tak", role: "Technical Department", photo: img17, github: "https://github.com/yashunh", linkedin: "https://www.linkedin.com/in/priyanshu-tak-48684b246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", instagram: "https://www.instagram.com/ignorant_1620/" },
                { id: 2, name: "Rohit Kumar Giri", role: "Technical Department", photo: img15, github: "https://github.com/Rohit-048", linkedin: "http://www.linkedin.com/in/rohit-kumar-giri-9b444324a", instagram: "https://www.instagram.com/rohit__2507/" },
                { id: 3, name: "Ayush Kant", role: "Technical Department", photo: img10, github: "https://github.com/Ayukant", linkedin: "https://www.linkedin.com/in/ayush-kant-305b352b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", instagram: "https://instagram.com/ayush" },
                { id: 4, name: "Ashini L J", role: "Designing", photo: img16, github: "https://github.com/Ashinilj", linkedin: "https://www.linkedin.com/in/ashini-l-j-78009924b/", instagram: "https://www.instagram.com/ashinilj/?igsh=cXBpd3kxeW1rcXU5&utm_source=qr" },
                { id: 5, name: "M Dhruv Singha", role: "Finance Department", photo: img7, github: "https://github.com/dhruv619singha", linkedin: "https://www.linkedin.com/in/m-dhruv-singha-a6a847250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", instagram: "https://www.instagram.com/dhruvsingha619/" },
                { id: 6, name: "Harsh Raj", role: "Finance Department", photo: img6, github: "https://github.com/harshraj423", linkedin: "https://www.linkedin.com/in/harsh-raj-53a757249/", instagram: "https://www.instagram.com/harsh_raj12390?igsh=MTdjaTR1ZWpsOXZuZw==" },
                { id: 7, name: "Rahul Prakash", role: "Marketing & PR", photo: img20, linkedin: "https://www.linkedin.com/in/rahul-prakash-774b0a289", instagram: "https://www.instagram.com/rahul_rians7?igsh=MTdhczQyNTg1c25wNA==" },
                { id: 8, name: "Deepti Arora", role: "Marketing & PR", photo: img12, github: "https://github.com/Deepi-AV", linkedin: "https://www.linkedin.com/in/deepti-arora-60583324a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", instagram: "https://www.instagram.com/_deep.iii_/" },
                { id: 9, name: "Atish Kumar Shaw", role: "Media Team", photo: img18, github: "https://github.com/Atish-Shaw", linkedin: "http://www.linkedin.com/in/atish-shaw-241976289", instagram: "https://www.instagram.com/_atish.vision?igsh=eXNkYmtmYTY3aWVzhttps://www.instagram.com/_atish.vision?igsh=eXNkYmtmYTY3aWVz" },
                { id: 10, name: "Sarthak Kumar", role: "Marketing & PR", photo: img9, github: "https://github.com/sarthak", linkedin: "https://linkedin.com/in/sarthak", instagram: "https://instagram.com/sarthak" },
                { id: 11, name: "Ekanshi", role: "Event Management", photo: img14, github: "https://github.com/Ekanshi12", linkedin: "https://www.linkedin.com/in/ekanshi-981247268/", instagram: "https://www.instagram.com/shi.yaa_12/" },
                { id: 12, name: "Utkarsh Prakhar", role: "Event Management", photo: img5, github: "https://github.com/utkarshprakhar", linkedin: "https://www.linkedin.com/in/utkarsh-prakhar-8a05a3251/", instagram: "https://www.instagram.com/_mr.savage__/" },
                { id: 13, name: "Kashvi Tandon", role: "Event Management", photo: img19, github: "https://github.com/kashvi", linkedin: "https://linkedin.com/in/kashvi", instagram: "https://instagram.com/kashvi" },
                { id: 14, name: "Kanish Rohilla", role: "Event Management", photo: img29, github: "http://github.com/bevenom", linkedin: "https://www.linkedin.com/in/kanish-rohilla-03b99027a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", instagram: "http://instagram.com/ikanishrohilla" },
                { id: 15, name: "Aashwi Ranjan", role: "Media Team", photo: img8, github: "https://github.com/Aashwi2", linkedin: "https://www.linkedin.com/in/aashwi-ranjan-05380a252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", instagram: "https://www.instagram.com/_aashwi.r2/" },
                { id: 16, name: "Harshit", role: "Finance Department", photo: img13, github: "https://github.com/Harshit2903", linkedin: "https://www.linkedin.com/in/harshit-mishra-217261249",  },
                { id: 17, name: "Kanishka", role: "Finance Department", photo: img11, github: "https://github.com/thesecret25", linkedin: "https://www.linkedin.com/in/kanishka-parmar-10745b21a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", instagram: "https://www.instagram.com/kannishkaa_?igsh=MWdrM2oxOXkzMDcxdg==" },
                { id: 18, name: "Rajan Mishra", role: "Media Team", photo: img21, github: "https://github.com/Rajanmishra321", linkedin: "https://www.linkedin.com/in/rajan-mishra-6699a324a/", instagram: "https://www.instagram.com/rajan_pandit_4545/" },
                { id: 19, name: "Kartik", role: "Marketing & PR", photo: img22, github: "https://github.com/kartikn1007-desig", linkedin: "https://www.linkedin.com/in/kartik-kashyap-337bb9272", instagram: "https://www.instagram.com/kartik16_16?igsh=Mmx2M3A4Y2FxbGg1" },
                { id: 20, name: "Lakshika", role: "Marketing & PR", photo: img23, github: "http://github.com/Lakshika0110", linkedin: "http://www.linkedin.com/in/lakshika-chanana-8752a5257",},
                { id: 21, name: "Akash", role: "Marketing & PR", photo: img24, github: "https://github.com/Akash59805", linkedin: "http://www.linkedin.com/in/akash-undefined-156751269", instagram: "https://www.instagram.com/akassh_0210?igsh=ZTM4ZDRiNzUwMw==" },
                { id: 22, name: "Sagar", role: "Marketing & PR", photo: img25, github: "https://github.com/SagarRaj002", linkedin: "https://www.linkedin.com/in/sagar-raj-57325b289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", instagram: "https://www.instagram.com/sagar_raj098?igsh=MTZiZzJ3ZndmMWZmYw==" },
                { id: 23, name: "Ananya Singh", role: "Media Team", photo: img26, github: "https://github.com/AnanyaSingh321", linkedin: "https://www.linkedin.com/in/ananya-singh-9b6014249", instagram: "https://www.instagram.com/ananyasinghh_13?igsh=ZWJtYnR0aTEzdDNl" },
                { id: 24, name: "Divesh Jha", role: "Designing", photo: img27, github: "https://github.com/JhaSatyam20", linkedin: "https://www.linkedin.com/in/divesh-jha-908aa024a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", instagram: "https://www.instagram.com/satyamjha___?igsh=aHZybGVwcHhna2tx" },
                { id: 25, name: "Rashad", role: "Designing", photo: img28, linkedin: "https://www.linkedin.com/in/rashadonin", instagram: "https://www.instagram.com/rashad_.fr" },
                { id: 26, name: "Adith M R", role: "Anchoring", photo: img30, github: "https://github.com/Ainz07", linkedin: "https://www.linkedin.com/in/adith-m-r-52706b279/"},
                { id: 27, name: "Palak Saini", role: "Designing", photo: img31, github: "https://github.com/PalakSaini27", linkedin: "http://www.linkedin.com/in/palak-saini-32aa6a24b", instagram: "https://www.instagram.com/plku_2004/?next=%2F" },
                { id: 28, name: "Nidhi", role: "Anchoring", photo: img32, linkedin: "https://www.linkedin.com/in/nidhi-sharma-98983b249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", instagram: "https://www.instagram.com/sharmanidhi523?igsh=ZTh2NTdjaGV6Y3Fx"},
                { id: 28, name: "Manleen Jagdeo", role: "Designing", photo: img33, github: "https://github.com/ManleenJagdeo", linkedin: "https://www.linkedin.com/in/manleen-jagdeo-5a504324b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", instagram: ""},
                
                 
            ];
            setCoreTeam(data2);
        };

        fetchTeamMembers();
    }, []);

    return (
        <div className="container-moreTeam d-flex flex-column justify-content-center align-items-center" id="team">
            <div className='head mb-4 mt-4'><h1>Our Team</h1></div>
            <h4 className='para mb-3'>Core Members</h4>
            <div className="container">
                <div className="row">
                    {coreTeam.map((member) => (
                        <div className="col-md-3 col-sm-6 mb-4 d-flex justify-content-center align-items-center" key={member.id}>
                            <div className="card-team">
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
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MoreTeam;
