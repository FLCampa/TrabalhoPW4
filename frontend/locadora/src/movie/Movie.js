import React, { Component } from "react"
import api from '../services/api'

class Movie extends Component {
    state = {
        person: []
    }
    componentDidMount() {
        api.get('/movies')
        .then(movie => console.log(movie))
        .catch(error => console.error(error))
    }


    render(){
        return (
            <div className="Movie">
                {this.state.person}
            </div>
        );
    }
}

export default Movie;