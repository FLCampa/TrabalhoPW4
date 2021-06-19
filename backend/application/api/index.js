const request = require('request');
const key = '86f0335e';
const fs = require('fs');

module.exports.home = async(server, req, res) => {
    let file = await readFile();
    resultWithAllMovies = []
    file.forEach(element => {
        resultWithAllMovies.push(getMoviesFromAPI(element.split(',')))
    });
    // resultWithAllMovies.forEach(element => {
    //   element.then(x => console.log(x));
    // })
    res.status(200).json(resultWithAllMovies);
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

function getMoviesFromAPI(id){
    return new Promise((resolve, reject) => {
        request(`http://www.omdbapi.com/?i=${id[0]}&apikey=${key}`, (error, sucess) => {
            if(error){
                reject(error);
                return;
            }
            resolve(JSON.parse(sucess.body));
        })
    })
}
