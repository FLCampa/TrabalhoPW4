const { home } = require("../api");
const { saveCustomer, loginCustomer } = require("../controller/CustomerController")

module.exports = (server) => {
    server.get('/', (req, res) => {
        saveCustomer(server);
    })

    server.get('/login/:email', (req, res) => {
        loginCustomer(server, req, res);
    })

    server.get('/movies', (req, res) => {
        home(server, req, res);
    })
}
