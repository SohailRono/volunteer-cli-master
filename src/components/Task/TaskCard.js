import React from 'react';

import {  Link, useHistory } from 'react-router-dom';
import './task.css'

const TaskCard = ({taskinfo}) => {
    return (

        <Link to={`/registration/${taskinfo._id}`}  className="col-md-3 px-2 mb-3 text-decoration-none" pointer="cursor">
           <div className="card border-0">
           <img className="card-img-top" height="250px" src={taskinfo.img} alt="" />
            <div className={`card-body topmarzinCard  bg-${taskinfo.background}`} >
                <p className=" card-title text-center text-light ">{taskinfo.title}</p>
            </div>
           </div>
        </Link>
    );
};

export default TaskCard;