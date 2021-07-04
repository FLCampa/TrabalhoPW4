const request = require('request');
const key = '86f0335e';
const fetch = require("node-fetch");
const fs = require('fs');
const { saveMovie } = require ('./../controller/MovieController')

module.exports.home = async(server, req, res) => {
    let file = await readFile();
    let movies = [];
    let qnt = file.length;
    for(i = 0; i < qnt; i++){
        let id = file[i]
        const api_url = `http://www.omdbapi.com/?i=${id}&apikey=${key}`;
        const fetch_resposse = await fetch(api_url);
        const json = await fetch_resposse.json();
        movies.push(json);
    }
    res.status(200).json(movies);
}


function readFile(){
    let codigos = [] 
    return new Promise((resolve, reject) => {
        fs.readFile("movies.txt", function(error, data) { 
            if(error) {
                reject(error);
            }
            let fileWithoutR = data.toString().split('\r');
            let fileWithoutLineBreak = fileWithoutR.toString().split('\n');
            fileWithoutLineBreak.forEach(element => {
                let id = (element.split(','));
                codigos.push(id[0])
            })
            resolve(codigos);
        })
    })
}

// function getMoviesFromAPI(id){
//     return new Promise((resolve, reject) => {
//         request(`http://www.omdbapi.com/?i=${id[0]}&apikey=${key}`, (error, sucess, data) => {
//             if(error){
//                 reject(error);
//             }
//             //console.log(JSON.parse(data));
//             resolve(JSON.parse(data));
//         })
//     })
// }

// function getMoviesFromAPI(id){
//     var teste = new Promise(
//         function(resolve, reject){
//             request(`http://www.omdbapi.com/?i=${id[0]}&apikey=${key}`, (error, sucess, data) => {
//                 if(error){
//                     reject(error);
//                 }
//                 resolve(JSON.parse(data));
//             })
//         }
//     )
//     let movie = teste.then(x)
//     return movie;

// }

async function saveMovieOnBD(server, id){
    let movie = await getMoviesFromAPI(id);
    //console.log(movie);
    saveMovie(server, movie)
}
