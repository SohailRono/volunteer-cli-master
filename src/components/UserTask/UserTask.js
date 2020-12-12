
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Menu from '../Header/Menu';

const UserTask = () => {
    const [userTask, setUserTask] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const ssemail = loggedInUser.email;
    useEffect(() => {
        fetch('https://calm-stream-57653.herokuapp.com/usertaskByEmail?email=' + loggedInUser.email)

            .then(res => res.json())
            .then(data => setUserTask(data))
    }, [])


    const deleteTask = (id) => {
        const deletedId = id;
        fetch(`https://calm-stream-57653.herokuapp.com/deleteUserTaskById/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                const filterData = userTask.filter(userTask => userTask._id != deletedId)
                setUserTask(filterData)
            })
    }
    return (
        <div>
            <Menu />
            <div className="container pt-5">
                <div className="row">
                    {
                        userTask.map(task =>
                            <div key={task._id} className="col-md-6 col-sm-12">
                                <div className="card h-100">
                                    <div className="row p-3">
                                        <div className="col-md-5 col-sm-12">
                                            <img className="w-75 h-100" src={task.img} alt="" />
                                        </div>
                                        <div className="col-md-7 col-sm-12">
                                            <h3>{task.activity}</h3>
                                            <h5>{task.date}</h5>

                                            <div className=' d-flex flex-row justify-content-end'>
                                                <button onClick={() => deleteTask(task._id)} className='btn btn-secondary btn-sm'>Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}



                </div>
            </div>
        </div>
    );
};

export default UserTask;