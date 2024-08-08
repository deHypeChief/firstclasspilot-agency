import "./style.css"
export default function Footer() {
    return (
        <footer>
            <div className="footerWrap">
            <div className="footerTopWrap">
                <div className="footerlogo"></div>
                <div className="footerContent">
                    <div className="fContent">
                        <h3>Contact Us</h3>
                        <p>+234(0)123456789 </p>
                        <p>contactus@firstclass.com </p>
                        <p className="fAddress">30st FirstClassPilot Street, Wuse Abuja Nigeria</p>
                    </div>
                    <div className="fContent">
                        <h3>Sitemap</h3>
                        <p>Home </p>
                        <p>Projects </p>
                        <p>About </p>
                        <p>Blog </p>
                        <p>Book a call </p>
                    </div>
                    <div className="fContent">
                        <h3>Creative Community</h3>
                        <p>Instagram </p>
                        <p>Twitter </p>
                        <p>Linkedin </p>
                        <p>Github </p>
                        <p>Behance </p>
                    </div>
                </div>
            </div>
            <div className="footerRefs">
                <p className="refs">
                    FirstClassPilot
                </p>
                <p className="refs">
                    2024 Legal Notice
                </p>
            </div>
            </div>
        </footer>
    )
}