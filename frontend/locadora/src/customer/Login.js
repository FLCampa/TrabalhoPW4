import React, { Component } from "react"
import './login.css'
import api from "../services/api";
import { Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            redirect: false
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        let email = this.state.value;
        api.post('/login/' + email).then(() =>{
            this.setState({ redirect: true });
            console.log('teste');
            //this.redirect();
        })
      }

      redirect(){
          if(this.state.redirect)
            return <Redirect to="/home"/>
      }
    render(){
        return(
            <div class="form-style">
                <form method="POST" onSubmit={this.handleSubmit}>
                    <h2>Login</h2>
                    <label for="Email">Email: </label><br/>
                    <input type="text" id="email" name="email" value={this.state.value} onChange={this.handleChange}/><br/>
                    <label for="password">Senha: </label><br/>
                    <input type="password" id="password" name="password"/><br/>
                    <input type="submit" value="Adicionar"></input>
                </form>

                <input type="button" value={this.redirect}></input>
            </div>
        )
    }

}
export default Login;