const request = require('request');
const key = '86f0335e';
const fs = require('fs');

// request(`http://www.omdbapi.com/?t=matrix&apikey=${key}`, (error, sucess) => {
//     if(error)
//         throw new Error(error);
//     console.log(JSON.parse(sucess.body));
// })

module.exports.home = async(server, req, res) => {
    let test = await teste();
}

function teste() {
    return new Promise((resolve, reject) => {

        fs.readFile("movies.txt", function(error, data) { 
            if(error) {
                res.send("Arquivo não localizado");
                return;
            }
    
            let list = data.toString().split('\r');
            let list2 = list.toString().split('\n');
            for(i = 0; i < list.length; i++) {
                
                let id = list2[i].split(',')
                request(`http://www.omdbapi.com/?i=${id[0]}&apikey=${key}`, (error, sucess) => {
                    if(error)
                        throw new Error(error);
                    resolve(JSON.parse(sucess.body));
                })
                
            }
        })

    })
}
