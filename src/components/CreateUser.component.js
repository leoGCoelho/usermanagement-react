import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class CreateUser extends Component{

  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeTel = this.onChangeTel.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      email: '',
      tel: 0,
      address: ''
    }
  }

  onChangeUsername(e){
    this.setState({
      username: e.target.value
    });
  }
  onChangeEmail(e){
    this.setState({
      email: e.target.value
    });
  }
  onChangeTel(e){
    this.setState({
      tel: e.target.value
    });
  }
  onChangeAddress(e){
    this.setState({
      address: e.target.value
    });
  }
  onSubmit(e){
    e.preventDefault();

    const user = {
      username: this.state.username,
      email: this.state.email,
      tel: this.state.tel,
      address: this.state.address
    }

    console.log(user);
    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));

    window.location = '/';
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
            <h3>Cadastrar Novo Usuário</h3>
            <br/>
            <form onSubmit={this.onSubmit} class="form shadow-sm" name="user_register">

              <div class="form-group">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Nome Completo</span>
                  </div>
                  <input type="text" class="form-control" value={this.state.username} onChange={this.onChangeUsername} />
                </div>
              </div>

              <div class="form-group">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Email</span>
                  </div>
                  <input type="text" class="form-control" value={this.state.email} onChange={this.onChangeEmail} />
                </div>
              </div>

              <div class="form-group">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Telefone</span>
                  </div>
                  <input type="number" class="form-control" value={this.state.tel} onChange={this.onChangeTel} />
                </div>
              </div>

              <div class="form-group">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Endereço</span>
                  </div>
                  <input type="text" class="form-control" value={this.state.address} onChange={this.onChangeAddress} />
                </div>
              </div>

              <br/>
              <button type="submit" class="btn btn-dark">Cadastrar</button>

            </form>
          </div>
        </container>
    </body>
    );

  }

}
