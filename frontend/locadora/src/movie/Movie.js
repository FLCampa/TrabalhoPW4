import React, { Component } from "react"
import './movie.css'
import api from '../services/api';


class Movie extends Component {
    
    addMovieToCustomer(id){
        api.put(`/addMovieToCustomer/${id}`)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.error(err);
        })

    }


    render(){
        return (
            <div className="Movie">
                <div class="form-style">
                    
                    <h2>{this.props.titulo}</h2>
                    <img src={this.props.imagem} alt=""/><br/><br/>
                    Lançamento: {this.props.lancamento}<br/>
                    Diretor: {this.props.diretor}<br/>
                    Escritor: {this.props.escritor}<br/>
                    Genero: {this.props.genero}<br/>
                    <input type="submit" onClick={() => this.addMovieToCustomer(this.props.id)}/>
                </div>
            </div>
        );
    }
}

export default Movie;