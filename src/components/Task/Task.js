import React, { useEffect, useState } from 'react';
import TaskCard from './TaskCard';

const Task = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('https://calm-stream-57653.herokuapp.com/getalltask')
            .then(res => res.json())
            .then(data => setTasks(data));

    }, [])

    return (
        <div className="container topmarzin">
            <div className="row">
            {
                tasks.map(taskinfo => <TaskCard key={taskinfo._id} taskinfo={taskinfo}></TaskCard>)
            }
            </div>
           
        </div>
    );
};

export default Task;