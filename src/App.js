import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
// Get our fontawesome imports
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Navbar and Sidebar (optional)
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
// Routes
import Home from "./components/Home.component";
import CreateUser from "./components/CreateUser.component";
import EditUser from "./components/EditUser.component";
import ShowUser from "./components/ShowUser.component";


function App() {
  return (
    <Router>
      <div>
        <header />
        <Route path="/" exact component={Home} />
        <Route path="/register" component={CreateUser} />
        <Route path="/edit/:id" component={EditUser} />
        <Route path="/show/:id" component={ShowUser} />
      </div>
    </Router>
  );
}

export default App;
