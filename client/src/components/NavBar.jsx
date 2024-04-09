import { Link } from "react-router-dom";

export default function NavBar(){
    return(
        <header className="nav-container">
            <Link to="/"> Logo </Link>

            <div className="nav-sec-2">
                <Link to="/Login"> Login </Link>
                <Link to="/Register"> Register </Link>
            </div>
        </header>
    )
}