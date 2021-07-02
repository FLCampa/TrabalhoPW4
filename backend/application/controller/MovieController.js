module.exports.saveMovie = async (server, movie) => {
    let connection = server.application.config.dbConnection();
    let movieDAO = new server.application.DAO.MovieDAO(connection);
    movieDAO.saveMovie(movie, (error, sucess) => {
        if(error){
            console.error(error);
            return;
        }
        console.log(sucess);
    })
    connection.end();
};