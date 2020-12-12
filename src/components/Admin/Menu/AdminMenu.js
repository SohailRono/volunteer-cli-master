import React from 'react';
import { Link } from 'react-router-dom';

const AdminMenu = () => {
    return (
        <>
            <div className='container'>
                <div className="row py-3">
                    <div className="col-md-3">
                        <img height='60' src="https://i.ibb.co/GQYn4Tp/logo.png" alt="" />
                    </div>
                    <div className="col-md-9">
                        <h4 className='font-weight-bolder mt-3'>Volunteer register list</h4>
                    </div>
                </div>
            </div>
            <div className="col-md-3 pt-4 pl-5 fullHeight">

                <ul className="nav flex-column">
                    <li className="nav-item mb-3">
                        <Link className="nav-link font-weight-bold btn btn-outline-primary active" to="/AdminHome">
                            <span><img height='30' src="https://i.ibb.co/Jc6ZbLQ/users.png" alt="" /></span>  Volunteer Resister List</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link font-weight-bold btn btn-outline-primary" to="/addTask">
                            <span><img height='30' src="https://i.ibb.co/fYcgC8L/add.png" alt="" /></span>  Add Event</Link>
                    </li>
                </ul>

            </div>
        </>
    );
};

export default AdminMenu;