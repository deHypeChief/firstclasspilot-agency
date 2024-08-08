import "../assets/styles/hireUs.css"
import Button from "../components/button/button"
import model from "../assets/images/modelLast.png"

export default function HireUs() {
    return (
        <>
            <section className="hire">
                <div className="hireLeft">
                    <div className="hireTop">
                        <h1>Get Started Today</h1>
                        <p>Reachout and we’ll get in touch within 24 hours.</p>
                    </div>

                    <form action="" className="hireForm">
                        <div className="formGroup">
                            <div className="formBox">
                                <p className="formLeb">First Name</p>
                                <input type="text" placeholder="First Name"/>
                            </div>
                            <div className="formBox">
                                <p className="formLeb">Surname</p>
                                <input type="text" placeholder="Surname"/>
                            </div>
                        </div>
                        <div className="formGroup">
                            <div className="formBox">
                                <p className="formLeb">Email Address</p>
                                <input type="text" placeholder="Your Email"/>
                            </div>
                            <div className="formBox">
                                <p className="formLeb">Phone Number(Optional)</p>
                                <input type="text" placeholder="Your Phone Number"/>
                            </div>
                        </div>
                        <div className="formGroup">
                            <div className="formBox">
                                <p className="formLeb">Tell us about your project</p>
                                <textarea name="" id="" placeholder="Please type your project description"></textarea>
                            </div>
                        </div>
                        <div className="formAction">
                        <Button alt>Book A Call</Button>

                            <Button>Send Message</Button>
                        </div>
                    </form>
                </div>
                <div className="hireRight">
                    <img src={model} alt="" />
                </div>
            </section>
        </>
    )
}