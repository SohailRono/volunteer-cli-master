import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Registration from './components/Registration/Registration';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login';
import UserTask from './components/UserTask/UserTask';
import TaskList from './components/Admin/TaskList';
import AdminHome from './components/Admin/Home/AdminHome';
import AddTask from './components/Admin/Home/AddTask';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({isSignIn : false, name: '', email: ''});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/login" component={Login} ></Route>
          <PrivateRoute path="/registration/:id">
            <Registration />
          </PrivateRoute>
          <PrivateRoute path="/usertask">
            <UserTask />
          </PrivateRoute>
          <PrivateRoute path="/adminhome">
            <AdminHome />
          </PrivateRoute>
          <PrivateRoute path="/addtask">
            <AddTask />
          </PrivateRoute>
          
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
