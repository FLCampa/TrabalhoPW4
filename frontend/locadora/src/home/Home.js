import React, { Component } from "react"
import Movie from "../movie/Movie";

class Home extends Component {


    render(){
        return (
            <div className="Home">
                <Movie/>
            </div>
        );
    }
}

export default Home;