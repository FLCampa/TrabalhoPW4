import React, { useState, useEffect } from "react";
import Movie from "../movie/Movie";
import api from '../services/api';
function Home(){
    const [movieData, setMovieData] = useState({});

    useEffect(() => {
        getDataFromApi();
      }, []);

      const getDataFromApi = async () => {
        const response = await api.get('/movies');
        console.log(response);
        setMovieData(response.data);
      }

      console.log(movieData);
    
    
    return (
        <div className="Home">
            {movieData.map((movie) => {
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

export default Home;