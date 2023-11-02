import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import CongoBongoLogo from "../../assets/CongoBongoLogo.png"
import profileIcon from "../../assets/profileIcon.png"
import "./Navbar.css";
function Nav() {

    function showNavigation() {
        if (Auth.loggedIn()) {
            return (
                <ul className="flex-row">
                    <li>
                        <Link to="/about">
                            About Us
                        </Link>
                    </li>
                    <li className="mx-1">
                        {/* this is not using the Link component to logout or user and then refresh the application to the start */}
                        <a href="/" onClick={() => Auth.logout()}>
                            Logout
                        </a>
                    </li>
                    {/*ADD LINK ONCE PROFILE PAGE IS MADE */}
                    <li className="mx-1">
                        <Link to="/">
                            <img src={profileIcon} alt="Home" />
                        </Link>
                    </li>
                </ul>
            );
        } else {
            return (
                <ul className="flex-row">
                    <li className="mx-1">
                        <Link to="/signup">
                            Signup
                        </Link>
                    </li>
                    <li className="mx-1">
                        <Link to="/login">
                            Login
                        </Link>
                    </li>
                </ul>
            );
        }
    }

    return (
        <header className="flex-row px-1">
            <li className="mx-1">
                <Link to="/">
                    <img src={CongoBongoLogo} alt="Home" />
                </Link>
            </li>
            <h1>CONGO BONGO</h1>
            <nav>
                {showNavigation()}
            </nav>
        </header>
    );
}
//a
export default Nav;
