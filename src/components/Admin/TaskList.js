import React from 'react';

const TaskList = () => {
    return (
        <div className="container bg-light p-3">
           <div className="card shadow h-100 rounded px-3">
           <table className="table table-hover">
               <thead>
                   <tr>
                      <td>Name</td>
                      <td>Email</td>
                      <td>Registration Date</td>
                      <td>Volunteer List</td>
                      <td>Action</td>
                   </tr>
               </thead>
            </table>
           </div>
        </div>
    );
};

export default TaskList;