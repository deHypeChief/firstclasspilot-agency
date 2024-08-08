import "../assets/styles/home.css"
import Button from "../components/button/button"

// WorkLogo
import wOne from "../assets/images/Blue Logo Png 1.png"
import wTwo from "../assets/images/CityXchange 2.png"
import wThree from "../assets/images/EDNA ELIMANI LOGO 1.png"
import wFour from "../assets/images/JevJaz Shop 1.png"
import wFive from "../assets/images/learn_igbo_logo (1) 1.png"
export default function Home() {
    return (
        <>
            <section className="hero">
                <div className="sectionWrap">
                    <div className="heroInfo">
                        <div className="heroText">
                            <h1>FirstClassPilot</h1>
                            <p className="heroSubText">
                                World class creative digital agency tasked with
                                bringing ideas to life
                            </p>
                            <div className="heroLabels">
                                <p>Digital Ads</p>
                                <div className="heroDot"></div>
                                <p>Creative Coding</p>
                                <div className="heroDot"></div>
                                <p>Social Media</p>
                            </div>
                        </div>

                        <div className="heroAction">
                            <Button alt>Learn More</Button>
                            <Button >Hire Us</Button>
                        </div>
                    </div>

                    <div className="heroBanner">

                    </div>
                    <div className="heroExtra">
                        <div className="heroExtraBox">
                            <div className="heroBoxExtra">

                            </div>
                            <p className="label">87 Website Made</p>
                        </div>
                        <div className="heroExtraBox">
                            <div className="heroBoxExtra">

                            </div>
                            <p className="label">87 Website Made</p>
                        </div>
                        <div className="heroExtraBox">
                            <div className="heroBoxExtra">

                            </div>
                            <p className="label">87 Website Made</p>
                        </div>
                        <div className="heroExtraBox">
                            <div className="heroBoxExtra">

                            </div>
                            <p className="label">87 Website Made</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="workLogos">
                <div className="sectionWrap">
                    <div className="workImgBox"><img src={wOne} alt="" /></div>
                    <div className="workImgBox"><img src={wTwo} alt="" /></div>
                    <div className="workImgBox"><img src={wThree} alt="" /></div>
                    <div className="workImgBox"><img src={wFour} alt="" /></div>
                    <div className="workImgBox"><img src={wFive} alt="" /></div>
                </div>
            </section>

            <section className="service">
                <div className="serviceTop">
                    <h4 className="sectionTag">SERVICES</h4>
                    <h2>Industries we have worked with</h2>
                </div>

                <div className="serviceList">
                    <div className="serviceBox">
                        <p className="serviceText">E-Commerce</p>
                        <div className="flyCard"></div>
                    </div>
                    <div className="serviceBox">
                        <p className="serviceText">E-Commerce</p>
                        <div className="flyCard"></div>
                    </div>
                    <div className="serviceBox">
                        <p className="serviceText">E-Commerce</p>
                        <div className="flyCard"></div>
                    </div>
                    <div className="serviceBox">
                        <p className="serviceText">E-Commerce</p>
                        <div className="flyCard"></div>
                    </div>
                    <div className="serviceBox">
                        <p className="serviceText">E-Commerce</p>
                        <div className="flyCard"></div>
                    </div>
                    <div className="serviceBox">
                        <p className="serviceText">E-Commerce</p>
                        <div className="flyCard"></div>
                    </div>
                </div>
            </section>

            <section className="blogPost">
                <div className="sectionWrap">
                    <div className="sectionTop">
                        <h4 className="sectionTag">BLOG POSTS</h4>
                        <h2>Read Some of our blog articles on medium</h2>
                    </div>

                    <div className="postList">
                        <div className="postListWrap">
                            <div className="blogBox">
                                <div className="blogTop">
                                    <div className="blogBoxB">

                                    </div>
                                    <p className="blogHead">Blog Post Title</p>
                                    <p className="blogText">
                                        Blog overview/summary will be here  Blog overview/summary will be here  Blog overview/summary will be here  Blog
                                    </p>
                                </div>
                                <div className="blogAction">
                                    <Button alt>Read On Medium</Button>
                                </div>
                            </div>

                            <div className="blogBox">
                                <div className="blogTop">
                                    <div className="blogBoxB">

                                    </div>
                                    <p className="blogHead">Blog Post Title</p>
                                    <p className="blogText">
                                        Blog overview/summary will be here  Blog overview/summary will be here  Blog overview/summary will be here  Blog
                                    </p>
                                </div>
                                <div className="blogAction">
                                    <Button alt>Read On Medium</Button>
                                </div>
                            </div>

                            <div className="blogBox">
                                <div className="blogTop">
                                    <div className="blogBoxB">

                                    </div>
                                    <p className="blogHead">Blog Post Title</p>
                                    <p className="blogText">
                                        Blog overview/summary will be here  Blog overview/summary will be here  Blog overview/summary will be here  Blog
                                    </p>
                                </div>
                                <div className="blogAction">
                                    <Button alt>Read On Medium</Button>
                                </div>
                            </div>
                        </div>
                        <div className="postAction">
                            <Button>Read Our Medium Posts</Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="active">
                <div className="sectionWrap">
                    <div className="activeLeft">
                        <h4 className="sectionTag">We Are Active</h4>
                        <h2 className="activeHeader">Follow Our <br />
                            Creative Community</h2>

                        <div className="activeList">
                            <div className="listBox">
                                <p>Linkedin</p>
                            </div>
                            <div className="listBox">
                                <p>Instagram</p>
                            </div>
                            <div className="listBox">
                                <p>X</p>
                            </div>
                            <div className="listBox">
                                <p>Github</p>
                            </div>
                            <div className="listBox">
                                <p>Behance</p>
                            </div>
                        </div>
                    </div>
                    <div className="activeRight">

                    </div>
                </div>
            </section>

            <section className="testmoni">
                <div className="sectionWrap">
                    <div className="sectionTop">
                        <h4 className="sectionTag">BLOG POSTS</h4>
                        <h2>Read Some of our blog articles on medium</h2>
                        <p className="setionTextsub">We brag in our excellence, but don’t just take our word for it. Check out what some of our satisfied clients have to say </p>
                    </div>


                    <div className="testiRow">
                        <div className="testBoxList">
                            <div className="testRowWrap">
                                <div className="testiBox">

                                    <div className="testBoxContent"></div>
                                    <div className="testWiteUp openTest">
                                        <div className="testiText">
                                            FirstClassPilot transformed our vision into reality with their exceptional design skills and professionalism. The final product exceeded our expectations, and we highly recommend their services to anyone looking for top-notch creative solutions.
                                        </div>
                                        <div className="testiAuthor">
                                            <p className="authorHead">Prosper Chukwuma</p>
                                            <p>COO FirstClassPilot</p>
                                        </div>
                                    </div>

                                </div>

                                <div className="testiBox">

                                    <div className="testBoxContent "></div>
                                    <div className="testWiteUp ">
                                        <div className="testiText">
                                            FirstClassPilot transformed our vision into reality with their exceptional design skills and professionalism. The final product exceeded our expectations, and we highly recommend their services to anyone looking for top-notch creative solutions.
                                        </div>
                                        <div className="testiAuthor">
                                            <p className="authorHead">Prosper Chukwuma</p>
                                            <p>COO FirstClassPilot</p>
                                        </div>
                                    </div>

                                </div>

                                <div className="testiBox">

                                    <div className="testBoxContent"></div>
                                    <div className="testWiteUp">
                                        <div className="testiText">
                                            FirstClassPilot transformed our vision into reality with their exceptional design skills and professionalism. The final product exceeded our expectations, and we highly recommend their services to anyone looking for top-notch creative solutions.
                                        </div>
                                        <div className="testiAuthor">
                                            <p className="authorHead">Prosper Chukwuma</p>
                                            <p>COO FirstClassPilot</p>
                                        </div>
                                    </div>

                                </div>

                                <div className="testiBox">

                                    <div className="testBoxContent"></div>
                                    <div className="testWiteUp">
                                        <div className="testiText">
                                            FirstClassPilot transformed our vision into reality with their exceptional design skills and professionalism. The final product exceeded our expectations, and we highly recommend their services to anyone looking for top-notch creative solutions.
                                        </div>
                                        <div className="testiAuthor">
                                            <p className="authorHead">Prosper Chukwuma</p>
                                            <p>COO FirstClassPilot</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}