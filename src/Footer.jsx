import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import './footer.css'
function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <footer>
                <div className="footer">
                    <div className="row-f">
                        <a href="https://www.youtube.com/channel/UCrZ84phJVmXK0o5MArsNlbQ"  target='_blank'><i className="fa fa-youtube"></i></a>
                        <a href="https://www.instagram.com/scifiinnovationclub/" target='_blank'><i className="fa fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/company/103704187" target='_blank'><i className="fa fa-linkedin"></i></a>
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
                        Sci-Fi Innovation Club Copyright © {currentYear} || All rights reserved || Designed By: Rishi Raj Gautam
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;