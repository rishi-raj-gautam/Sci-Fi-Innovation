import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import './footer.css'
function Footer() {
    return (
        <>
            <footer>
                <div className="footer">
                    <div className="row-f">
                        <a href="#"><i className="fa fa-youtube"></i></a>
                        <a href="https://www.instagram.com/scifiinnovationclub/" target='_blank'><i className="fa fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/sci-fi-innovation-club-582062318/" target='_blank'><i className="fa fa-linkedin"></i></a>
                    </div>

                    <div className="row-f">
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#events">Events</a></li>
                            <li><a href="#team">Our Team</a></li>
                        </ul>
                    </div>

                    <div className="row-f">
                        Sci-Fi Innovation Club Copyright © 2024 || All rights reserved || Designed By: Rishi Raj Gautam
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;