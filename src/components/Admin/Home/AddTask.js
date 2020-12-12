import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const AddTask = () => {
  const [task, setTask] = useState({});
  const [file, setFile] = useState(null);

  const handleBlur = e => {
    const newTask = { ...task };
    newTask[e.target.name] = e.target.value;
    setTask(newTask);
  }

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  }

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('file',file);
    formData.append('title',task.title);
    formData.append('description',task.description);
    formData.append('date',task.date);

    fetch('https://calm-stream-57653.herokuapp.com/addTask',{
      method:'POST',
      body:formData
    })
    .then(res => res.json())
    .then(data => console.log(data));
  }

  const { register, errors } = useForm();

  // const onSubmit = data => {
  //   // data.img = selectedTaskName.img;
  //   fetch('https://calm-stream-57653.herokuapp.com/addusertask', {
  //     method: 'POST',
  //     headers: { 'content-type': 'application/json' },
  //     body: JSON.stringify(data)
  //   })
  //     .then(res => res.json())
  //     .then(success => {
  //       if (success) {
  //         alert('save successfull!')
  //         // history.push('/usertask');
  //       }
  //     })
  // }

  return (
    <>
      <div className='container-fluid'>
        <div className="row">
          <div className="col-md-3 px-3 py-3">
            <Link to="/"> <img height='60' src="https://i.ibb.co/GQYn4Tp/logo.png" alt="" /> </Link>
          </div>
          <div className="col-md-9 px-3 py-3">
            <h4 className='font-weight-bolder mt-3'>Add Event</h4>
          </div>
        </div>
      </div>

      <div className='container-fluid'>
        <div className="row ">
          <div className="col-md-3 fullHeight px-3 py-3">

            <ul className="nav flex-column">
              <li className="nav-item mb-3">
                <Link className="nav-link font-weight-bold" to="/AdminHome">
                  <span><img height='30' src="https://i.ibb.co/Jc6ZbLQ/users.png" alt="" /></span>  Volunteer Resister List</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link font-weight-bold active" to="/AddTask">
                  <span><img height='30' src="https://i.ibb.co/fYcgC8L/add.png" alt="" /></span>  Add Event</Link>
              </li>
            </ul>

          </div>
          <div className="col-md-9 fullHeight background px-3 py-3">
            <div className="card shadow h-100 rounded p-3">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="">Event Title</label>
                      <input onBlur={handleBlur} name='title' className='form-control' placeholder='Event Title' ref={register({ required: true })} />
                      {errors.title && <span className="error">Title required</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Event Description</label>
                      <textarea onBlur={handleBlur} name="description" className='form-control' placeholder='Event Name'></textarea>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="">Event Date</label>
                      <input onBlur={handleBlur} name="date" className='form-control' type="date" ref={register({ required: true })} />
                      {errors.date && <span className="error">Date required</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Event Image</label>
                      <input onChange={handleFileChange} name="file" className='form-control' type="file" ref={register({ required: true })} />
                      {errors.img && <span className="error">Image required</span>}
                    </div>
                  </div>
                  <button className='btn btn-primary ml-auto mr-3'>Add Event</button>
                </div>
                {/* <label htmlFor="title">Event Title</label>
                    <input className="form-control" name="title" ref={register({ required: true })} placeholder="Event Title" />
                    <br />
                    {errors.title && <span className="error">Title required</span>}
                    
                    <input className="btn btn-primary btn-block btn-lg" type="submit" value="submit" /> */}
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default AddTask;