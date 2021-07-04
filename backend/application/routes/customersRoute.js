const { home } = require("../api");
const { saveCustomer, loginCustomer } = require("../controller/CustomerController")

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
}
