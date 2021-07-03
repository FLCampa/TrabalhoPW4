import React, { Component } from "react"
import './movie.css'


class Movie extends Component {

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
                    <input type="submit"/>
                </div>
            </div>
        );
    }
}

export default Movie;