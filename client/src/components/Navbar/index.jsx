import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

    function showNavigation() {
        if (Auth.loggedIn()) {
            return (
                <ul className="flex-row">
                    <li className="mx-1">
                        {/* this is not using the Link component to logout or user and then refresh the application to the start */}
                        <a href="/" onClick={() => Auth.logout()}>
                            Logout
                        </a>
                    </li>
                    {/*ADD LINK ONCE PROFILE PAGE IS MADE */}
                    <li className="mx-1">
                        <Link to="/">
                            <img src={profileIcon.jpg} alt="Home" />
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
                <Link to="/home">
                    <img src={CongoBongoLogo.png} alt="Home" />
                </Link>
            </li>
            <h1>CONGO BONGO</h1>
            <nav>
                {showNavigation()}
            </nav>
        </header>
    );
}

export default Nav;
