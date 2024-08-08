import { Link } from "react-router-dom"
import "./style.css"
import Button from "../button/button"
export default function Navbar() {
    return (
        <nav>
            <div className="navLogo"></div>
            <div className="navLinks">
                <div className="navListWrap">
                    <li className="navActive">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="">
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li className="">
                        <Link to="/about">About</Link>
                    </li>
                </div>
            </div>
            <div className="navAction">
                <Link to="/hireUs">
                    <Button>Hire Us</Button>
                </Link>
            </div>
        </nav>
    )
}