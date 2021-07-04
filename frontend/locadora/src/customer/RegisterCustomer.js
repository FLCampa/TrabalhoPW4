import React, { Component } from "react"
import './login.css'
import api from "../services/api";

class RegisterCustomer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            customer_name:'',
            cellphone:'',
            email:'',
            customer_password:''
        };
    
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleSubmit(event) {
        event.preventDefault();
        let payload = {
            id: null,
            customer_name:this.state.customer_name,
            cellphone:this.state.cellphone,
            email:this.state.email,
            customer_password:this.state.customer_password
        }
        api.post('/saveCustomer', payload, {
            headers:{
                'Content-Type': 'application/json'
            }
            
        })
        .then(()=> {
            console.log('sucess')
        }).catch(()=> {
            console.error('error')
        })
      }

      handleTextChange(event) {
        switch (event.target.name) {
            case "customer_password":
                this.setState({customer_password: event.target.value});
                break;
            case "email":
                this.setState({email: event.target.value});
                break;  
            case "customer_name":
                this.setState({customer_name: event.target.value});
                break;
            case "cellphone":
                this.setState({cellphone: event.target.value});
                break;
            default:
                break;
        }
    }
    render(){
        return(
            <div class="form-style">
                <form method="POST" onSubmit={this.handleSubmit}>
                    <h2>Login</h2>
                    <label for="Email">Email: </label><br/>
                    <input type="text" id="email" name="email" value={this.state.value} onChange={ this.handleTextChange }/><br/>
                    <label for="customer_password">Senha: </label><br/>
                    <input type="password" id="customer_password" name="customer_password" onChange={ this.handleTextChange }/><br/>
                    <label for="customer_name">Nome: </label><br/>
                    <input type="text" id="customer_name" name="customer_name" onChange={ this.handleTextChange }/><br/>
                    <label for="cellphone">Telefone: </label><br/>
                    <input type="text" id="cellphone" name="cellphone" onChange={ this.handleTextChange }/><br/>
                    <input type="submit" value="Adicionar"></input>
                </form>
            </div>
        )
    }

}
export default RegisterCustomer;