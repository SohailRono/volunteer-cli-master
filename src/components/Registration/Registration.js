import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import './Registration.css'
import logo from '../../images/logos/logo.png';

const Registration = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedTaskName, setSlectedTaskName] = useState({});
    const { id } = useParams();
    const { register, handleSubmit, errors } = useForm();

    const history = useHistory();
    useEffect(() => {
        fetch(`https://calm-stream-57653.herokuapp.com/gettaskById/${id}`)
            .then(res => res.json())
            .then(data => setSlectedTaskName(data));
    }, []);

    const onSubmit = data => {
        data.img = selectedTaskName.img;
        fetch('https://calm-stream-57653.herokuapp.com/addusertask',{
            method:'POST',
            headers:{ 'content-type' : 'application/json'},
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                alert('save successfull!')
                history.push('/usertask');
            }
        })
    }

  
    return (
        <div className="registration_container">
            <div className="img-logo">
               <Link to="/"><img src={logo} alt="" /> </Link>
            </div>
            <div className='input_container'>
                <h2>Register as a Volunteer</h2>
                <form className='registration_form' onSubmit={handleSubmit(onSubmit)}>
                    {/* <h1>title:{usersData.title}</h1> */}
                    <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Full Name" />
                    <br />
                    {errors.name && <span className="error">Full Name required</span>}
                    <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Username or Email" />
                    <br />
                    {errors.email && <span className="error">Email is required</span>}
                    <input type="date" id="date" name="date" ref={register({ required: true })} placeholder="date" />
                    <br />
                    {errors.date && <span className="error">date is required</span>}
                    <input type="text" id="description" name="description" ref={register({ required: true })} placeholder="description" />
                    <br />
                    {errors.description && <span className="error">description is required</span>}
                    <input name="activity" defaultValue={selectedTaskName.title} ref={register({ required: true })} placeholder="activity" />
                    {errors.activity && <span className="error">activity is required</span>}
                    <br />
                    <input className="btn btn-primary btn-block btn-lg" type="submit" value="Registration" />
                </form>
            </div>
        </div>
    );
};

export default Registration;