import React, { Component } from "react"
import Movie from "../movie/Movie";
import api from '../services/api';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            lista: []
        }
    }
      getDataFromApi = async () => {
        api.get('/movies')
        .then((res) => this.setState({lista: res.data}))
      }

      componentDidMount() {
        this.getDataFromApi()
    }
    render(){
        return (
            <div className="Home">
                {this.state.lista.map((movie) => {
                    return <Movie 
                            titulo={movie.Title}
                            imagem={movie.Poster}
                            lancamento={movie.Released}
                            diretor={movie.Director}
                            escritor={movie.Writer}
                            genero={movie.Genre}
                            />
                })}
            </div>
        );
    }
    
}

export default Home;