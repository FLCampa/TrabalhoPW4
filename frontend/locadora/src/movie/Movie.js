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
                    <b>Lançamento:</b> {this.props.lancamento}<br/>
                    <b>Diretor:</b> {this.props.diretor}<br/>
                    <b>Escritor:</b> {this.props.escritor}<br/>
                    <b>Genero:</b> {this.props.genero}<br/>
                    <input type="submit" onClick={() => this.addMovieToCustomer(this.props.id)}/>
                </div>
            </div>
        );
    }
}

export default Movie;