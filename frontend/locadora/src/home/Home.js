import { useState, useEffect } from "react";
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
    // const [movieData, setMovieData] = useState({});

    // useEffect(() => {
    //     fetch('http://localhost:80/movies')
    //     .then((res) => res.json())
    //     .then(setMovieData)
    //   }, []);

      
      getDataFromApi = async () => {
        api.get('/movies')
        .then((res) => this.setState({lista: res.data}))
      }

      componentDidMount() {
        this.getDataFromApi()
    }
    //   console.log(movieData);
    
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