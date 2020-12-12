import React, { useContext } from 'react';
import googleIcon from '../../images/logos/google.png';
import logo from '../../images/logos/logo.png';
import * as firebase from "firebase/app";
import 'firebase/auth';
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './login.css'


const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation()
    let { from } = location.state || { form: { pathname: "/" } }

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig)
    }

    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(provider).then(function (result) {

            const { displayName, email } = result.user;
            const user = {
                isSignIn: true,
                name: displayName,
                email: email,
            }
            setLoggedInUser(user);
            storeAuthToken();
        }).catch(function (error) {
            let errorCode = error.code;
            let errorMessage = error.message;
            let email = error.email;
            let credential = error.credential;
        });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken)
                history.replace(from)
            }).catch(function (error) {
                // Handle error
            });
    }

    return (
        <div className='login-container'>
            <div className="img-logo">
                <Link to="/">
                <img src={logo} alt="" />
                </Link>
            </div>
            <div className='login-form'>
                <div className="login_info">
                    <h2>Login With</h2>
                    <button onClick={handleGoogleSignIn}> <img className='googleIcon' src={googleIcon} alt="" /> Continue with Google</button>
                </div>
                <div className="registration_info mt-3">
                    <h6>Don't have an account? <a href="">Create an account</a></h6>
                   
                </div>
            </div>
        </div>
    );
};

export default Login;