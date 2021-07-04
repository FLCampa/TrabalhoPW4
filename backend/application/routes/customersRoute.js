const { home } = require("../api");
const { saveCustomer, loginCustomer, addMovieToCustomer } = require("../controller/CustomerController")

module.exports = (server) => {
    server.post('/saveCustomer', (req, res) => {
        saveCustomer(server, req, res);
    })

    server.post('/login/:email/:password', (req, res) => {
        loginCustomer(server, req, res);
    })

    server.get('/movies', (req, res) => {
        home(server, req, res);
    })
    server.put('/addMovieToCustomer/:idMovie/', (req, res) => {
        addMovieToCustomer(server, req, res);
    })
}
