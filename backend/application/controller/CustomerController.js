// function CustomerController (){
// };

function populateTable(server) {
    // let customer1 = new Customer('Juca', '3345678', 'juca@gmail.com', '123');
    // let customer2 = new Customer('Mario', '997890', 'mario@hotmail.com', '789');

    let customer1 = new server.application.model.Customer(null, 'Juca', '3345678', 'juca@gmail.com', '123');
    let customer2 = new server.application.model.Customer(null, 'Mario', '997890', 'mario@hotmail.com', '789');

    let list = [customer1, customer2];

    return list;
};

// salgar senha qnd o front estiver pronto

module.exports.saveCustomer = (server) => {
    let customers = populateTable(server);
    let connection = server.application.config.dbConnection();
    /*let customerDAO = new server.application.DAO.CustomerDAO(connection);

    customerDAO.saveCustomer(customers[0], (error, sucess) => {
        if (error) {
            console.error(error);
            return;
        }
        console.log(sucess);
    })
    connection.end();*/
};

module.exports.loginCustomer = (server, req, res) => {
    let email = req.params.email;
    let connection = server.application.config.dbConnection();
    let customerDAO = new server.application.DAO.CustomerDAO(connection);

    customerDAO.getOneCustomer(email, (error, sucess) => {
        if (error) {
            console.error(error);
            return;
        }
        console.log(sucess);
    })
    connection.end();
};

module.exports.updateCustomer = (server, req, res) => {
    let customer = req.body;
    let connection = server.application.config.dbConnection();
    let customerDAO = new server.application.DAO.CustomerDAO(connection);

    customerDAO.updateCustomer(customer, (error, sucess) => {
        if (error) {
            console.error(error);
            return;
        }
        console.log(sucess);
    })
    connection.end();
};
