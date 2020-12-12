import React from 'react';
import Header from '../Header/Header';

import Task from '../Task/Task';

const Home = () => {
    return (
        <div className="container-fluid">
           <Header></Header>
            <Task></Task>
        </div>
    );
};

export default Home;