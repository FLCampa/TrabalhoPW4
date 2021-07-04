import React, { Component } from "react"
import './login.css'
import api from "../services/api";
import { Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleTextChange(event) {
        switch (event.target.name) {
            case "email":
                this.setState({email: event.target.value});
                break;  
            case "password":
                this.setState({password: event.target.value});
                break;
            default:
                break;
        }
    }
    
      handleSubmit(event) {
        event.preventDefault();
        let payload = {
            email:this.state.email,
            password:this.state.password
        }
        api.post(`/login/${this.state.email}/${this.state.password}`, payload, {
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then( res => {
            console.log(res)
        }).catch( res => {
            console.error(res)
        })
      }

    render(){
        return(
            <div class="form-style">
                <form method="POST" onSubmit={this.handleSubmit}>
                    <h2>Login</h2>
                    <label for="Email">Email: </label><br/>
                    <input type="text" id="email" name="email" value={this.state.value} onChange={ this.handleTextChange }/><br/>
                    <label for="password">Senha: </label><br/>
                    <input type="password" id="password" name="password" onChange={ this.handleTextChange }/><br/>
                    <input type="submit" value="Login"></input>
                </form>
            </div>
        )
    }

}
export default Login;