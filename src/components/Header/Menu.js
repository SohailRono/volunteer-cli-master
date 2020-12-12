import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logos/logo.png';
import './header.css';

const Menu = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <nav className="header-menu navbar navbar-expand-lg navbar-light ">
            <Link className="navbar-brand" to={'/'}>
                <img src={logo} alt="" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto ">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Donation</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/usertask">Events</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Blog</Link>
                    </li>
                    {
                        loggedInUser.isSignIn ?
                            <li className="nav-item">
                                <Link onClick={() => setLoggedInUser({})} className="btn btn-primary btn-md" to="/">LogOut</Link>
                            </li>
                            :
                            <li className="nav-item">
                                <Link className="btn btn-primary btn-md" to="/registration">Register</Link>
                            </li>

                    }
                    <li className="nav-item">
                        <Link className="btn btn-dark btn-md" to="/adminhome">Admin</Link>
                    </li>

                </ul>

            </div>
        </nav>

    );
};

export default Menu;