import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
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

const User = props => (
  <tr>
    <td>{props.user.username}</td>
    <td id="mobileHiddenItem">{props.user.email}</td> 
    <td id="mobileHiddenItem">{props.user.tel}</td>
    <td id="mobileHiddenItem">{props.user.address}</td>
    <td><button class="btn-dark"><Link to={"/show/"+props.user._id}><FontAwesomeIcon icon={faEye} size="sm"/></Link></button>
    <button class="btn-dark"><Link to={"/edit/"+props.user._id}><FontAwesomeIcon icon={faPlay} size="sm"/></Link></button>
    <button class="btn-dark"><a href="#" onClick={() => props.deleteUser(props.user._id)}><FontAwesomeIcon icon={faTrash} size="sm"/></a></button></td>
  </tr>
)

export default class Home extends Component{

  constructor(props){
    super(props);

    this.deleteUser = this.deleteUser.bind(this);
    this.state = {users: []};
  }

  componentDidMount(){
    axios.get('http://localhost:5000/users/')
      .then(response => { this.setState({ users: response.data }) })
      .catch((error) => { console.log(error); })
  }
  deleteUser(id) {
    axios.delete('http://localhost:5000/users/'+id)
      .then(res => { console.log(res.data)});

    this.setState({
      users: this.state.users.filter(el => el._id !== id)
    })
  }
  userList() {
    return this.state.users.map(currentuser => {
      return <User user={currentuser} deleteUser={this.deleteUser} key={currentuser._id}/>;
    })
  }


  render() {
    return (
    <body>
        <div class="pos-f-t">
          <div class="collapse" id="navbarToggleExternalContent">
            <div class="bg-dark p-4">
              <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="Buscar usuário" aria-label="Pesquisar" />
                <button class="btn btn-outline-light my-2 my-sm-0" type="submit">
                  <FontAwesomeIcon icon={faSearch} size="sm"/>
                </button>
              </form>
            </div>
          </div>
          <nav class="navbar navbar-dark bg-dark sticky-to p">
            <a class="navbar-brand" href="#">Gerenciador de Usuários</a> 
            <form class="form-inline" id="mobileHiddenItem">
              <input class="form-control mr-sm-2" type="search" placeholder="Buscar usuário" aria-label="Pesquisar" />
              <button class="btn btn-outline-light my-2 my-sm-0" type="submit">
                <FontAwesomeIcon icon={faSearch} size="sm"/>
              </button>
            </form>
            <button class="navbar-toggler" id="navbarBtn" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Alterna navegação">
              <span class="navbar-toggler-icon"></span>
            </button>
          </nav>
        </div>

        <container>
          <div class="rTable">
            <table class="table table-striped shadow-sm">
              <thead class="thead-dark">
                <tr>
                  <th>Nome</th>
                  <th id="mobileHiddenItem">Email</th> 
                  <th id="mobileHiddenItem">Telefone</th>
                  <th id="mobileHiddenItem">Endereço</th>
                  <th>Ação</th>
                </tr>
              </thead>
              <tbody>
                { this.userList() }
              </tbody>
            </table>  
          </div>
        </container>

        <a href="/register" class="floatButton btn-dark">
        <div class="my-float">
          <FontAwesomeIcon icon={faPlus} size="2x"/>
        </div>
      </a>
      <div class="label-container">
        <div class="label-text">Adicionar Usuario</div>
        <div class="label-arrow">
          <FontAwesomeIcon icon={faPlay} size="sm"/>
        </div>
      </div>

      </body>
  );

  }

}