const request = require('request');
const key = '86f0335e';
const fs = require('fs');
const { saveMovie } = require ('./../controller/MovieController')

module.exports.home = async(server, req, res) => {
    let file = await readFile();
    let teste =[]
    file.forEach((element) => {
        let id = (element.split(','));
        teste.push(getMoviesFromAPI(id));
    });
    //teste.forEach(x => console.log(x));
    //res.status(200).json(teste);
}


function readFile(){
    return new Promise((resolve, reject) => {
        fs.readFile("movies.txt", function(error, data) { 
            if(error) {
                reject(error);
            }
            let fileWithoutR = data.toString().split('\r');
            let fileWithoutLineBreak = fileWithoutR.toString().split('\n');
            resolve(fileWithoutLineBreak);
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

function getMoviesFromAPI(id){
    var teste = new Promise(
        function(resolve, reject){
            request(`http://www.omdbapi.com/?i=${id[0]}&apikey=${key}`, (error, sucess, data) => {
                if(error){
                    reject(error);
                }
                resolve(JSON.parse(data));
            })
        }
    )
    let movie = teste.then(x)
    return movie;

}

async function saveMovieOnBD(server, id){
    let movie = await getMoviesFromAPI(id);
    //console.log(movie);
    saveMovie(server, movie)
}
