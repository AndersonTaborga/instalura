import React, { Component } from 'react';
import queryString from 'query-string';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {msg: queryString.parse(this.props.location.search).msg};
    }

    /* Sempre que fizermos um Ajax, precisamos interromper o fluxo natural do carregamento da DOM */
    envia(event) {
        event.preventDefault();

        const requestInfo = {
            method: 'POST',
            body: JSON.stringify({login: this.login.value,
                senha: this.senha.value}),
            headers: new Headers({
                'Content-type':'application/json'
            })
        }

        fetch('https://instalura-api.herokuapp.com/api/public/login', requestInfo)
            .then(response => {
                if (response.ok){
                    return response.text();
                }else {
                    // this.setState({msg: 'Não foi possível fazer login.'})
                    throw new Error('Não foi possivel fazer o login.');
                }
            })
            .then(token => {
                localStorage.setItem('auth-token', token);
                this.props.history.push('/timeline');
            })
            .catch(error => {
                this.setState({msg: error.message});
            })
    }

    render() {
        return (
          <div className='login-box'>
              <h1 className='header-logo'>Instalura</h1>
              <span>{this.state.msg}</span>
              <form onSubmit={this.envia.bind(this)}>
                  <input type="text" ref={(input) => this.login = input}/>
                  <input type="password" ref={(input) => this.senha = input}/>
                  <input type="submit" value='login'/>
              </form>
          </div>
        );
    }

}