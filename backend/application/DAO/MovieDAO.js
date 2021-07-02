function MovieDAO(connection) {
    this._connection = connection;
}

MovieDAO.prototype.saveMovie = function(movie, callback) {
    //console.log(movie.imdbID);
    console.log(movie)
    let sql = `INSERT INTO movie values(imdbID = ?, Title = ?, year_movie = ?, Released = ?, RunTime = ?, Genre = ?, Director = ?, Writer = ?, Actors = ?, Plot = ?, Poster = ?)`
    let data = [movie.imdbID, movie.Title, movie.Year, movie.Released, movie.Runtime, movie.Genre, movie.Director, movie.Writer, movie.Actors, movie.Plot, movie.Poster];
    //console.log(data);
    this._connection.query(sql, data, callback);
}


module.exports = () => {
    return MovieDAO;
}