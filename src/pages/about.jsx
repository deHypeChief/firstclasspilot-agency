import "../assets/styles/about.css"
export default function About() {
    return (
        <>
            <section className="about">
                <div className="topAboutContent">
                    <h1>
                        FirstClassPilot Digital Agency,
                        Bringing Ideas To Life
                    </h1>
                    <p>
                        At FirstClassPilot, we&apos;re dedicated to creating a supportive space where every idea is valued, and every dream is nurtured. We passionatly believe that creativity has the power to inspire positive change and transform lives in profound ways
                    </p>
                </div>

                <div className="aboutSlide">
                    <div className="slideList">
                        <div className="boxSlideAbout"></div>
                        <div className="boxSlideAbout"></div>
                        <div className="boxSlideAbout"></div>
                        <div className="boxSlideAbout"></div>
                        <div className="boxSlideAbout"></div>
                    </div>
                    <div className="slideControl">
                        <div className="slideLine"></div>
                        <div className="slideLine"></div>
                        <div className="slideLine"></div>
                        <div className="slideLine"></div>
                    </div>
                </div>
            </section>

            <section className="aboutBox">
                <div className="aboutBoxLeft">
                    <h4 className="sectionTag">How it started</h4>
                    <h2>Like our ancestors in days of old, we’re building our own tribe of passionate visionaries unafraid of sharing their ideas and culture with the world.</h2>

                    <p>More than a studio, we're your long-term ally.</p>
                    <p>We specialize in human-centered design where technology serves humanity, not the other way around. This not only elevates your brand but also solves real-world problems. </p>
                    <p>We see ourselves as your long-term partner – working closely with you for true collaboration, from initial concept to final product. This way, we’re invested in your success.</p>
                </div>
                <div className="aboutBoxRight"></div>
            </section>


            <section className="MandV">
                <div className="mv">
                    <h4 className="sectionTag">
                        Our Vision
                    </h4>
                    <h2>
                        Like our ancestors in days of old, we’re building our own tribe of passionate visionaries unafraid of sharing their ideas and culture with the world.
                    </h2>
                </div>

                <div className="mv">
                    <h4 className="sectionTag">
                        Our Mission
                    </h4>
                    <h2>
                        Like our ancestors in days of old, we’re building our own tribe of passionate visionaries unafraid of sharing their ideas and culture with the world.
                    </h2>
                </div>
            </section>


            <section className="team">
                <div className="teamTop">
                    <h4 className="sectionTag">
our Team
                    </h4>
                    <h2>get to know the people that get it all done</h2>
                </div>

                <div className="teamGrid">
                    <div className="teamBox">
                        <div className="teamImg"></div>
                        <div className="teamText">
                            <p className="teamHead">Pilot Obi</p>
                            <p className="teamRole">CEO/Creative Director</p>
                        </div>
                    </div>

                    <div className="teamBox">
                        <div className="teamImg"></div>
                        <div className="teamText">
                            <p className="teamHead">Pilot Obi</p>
                            <p className="teamRole">CEO/Creative Director</p>
                        </div>
                    </div>
                    <div className="teamBox">
                        <div className="teamImg"></div>
                        <div className="teamText">
                            <p className="teamHead">Pilot Obi</p>
                            <p className="teamRole">CEO/Creative Director</p>
                        </div>
                    </div>
                    <div className="teamBox">
                        <div className="teamImg"></div>
                        <div className="teamText">
                            <p className="teamHead">Pilot Obi</p>
                            <p className="teamRole">CEO/Creative Director</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}