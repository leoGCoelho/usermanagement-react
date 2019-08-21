import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class ShowUser extends Component{

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      tel: 0,
      address: ''
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/users/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          username: response.data.username,
          email: response.data.email,
          tel: response.data.tel,
          address: response.data.address
        })
      })
      .catch(function (error) { console.log(error) })
  }


  render(){

    return(
      <body>
      <nav class="navbar navbar-dark bg-dark sticky-top">
          <a class="navbar-brand" href="#">Gerenciador de Usuários</a>
          <button class="btn btn-outline-light my-2 my-sm-0" type="submit">
            <a href="/" id="myBtn">Voltar</a>
          </button>
        </nav>

        <container>
          <div class="rTable">
            <br/>
            <h3>{this.state.username}</h3>
            <br/>
            <form onSubmit={this.onSubmit} class="form shadow-sm" name="user_register">

              <div class="form-group">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Email</span>
                  </div>
                  <input type="text" class="form-control" value={this.state.email} readonly/>
                </div>
              </div>

              <div class="form-group">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Telefone</span>
                  </div>
                  <input type="number" class="form-control" value={this.state.tel} readonly/>
                </div>
              </div>

              <div class="form-group">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Endereço</span>
                  </div>
                  <input type="text" class="form-control" value={this.state.address} readonly/>
                </div>
              </div>

            </form>
          </div>
        </container>
    </body>
    );

  }

}
