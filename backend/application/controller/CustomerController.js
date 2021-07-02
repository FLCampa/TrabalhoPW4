module.exports.saveCustomer = async (server, req, res) => {
    let connection = server.application.config.dbConnection();
    let customerDAO = new server.application.DAO.CustomerDAO(connection);
    let customer = req.body;

    saveCustomer(customer, customerDAO).then(sucess => 
        res.status(200).json(sucess)
    ).catch(error => {
        res.status(400).json(error)
    })
    connection.end();
};

module.exports.loginCustomer = async (server, req, res) => {
    let email = req.params.email;
    console.log(email);
    let connection = server.application.config.dbConnection();
    let customerDAO = new server.application.DAO.CustomerDAO(connection);

    getOneCustomer(customerDAO, email).then(customer => 
        res.status(200).json(customer)
    ).catch(error => {
        res.status(400).json(error)
    })
   
    connection.end();
};

module.exports.updateCustomer = (server, req, res) => {
    let customer = req.body;
    let connection = server.application.config.dbConnection();
    let customerDAO = new server.application.DAO.CustomerDAO(connection);

    updateCustomer(customer, customerDAO).then(updated => 
        res.status(200).json(updated)
    ).catch(error => {
        res.status(400).json(error)
    })
    
    connection.end();
};

function getOneCustomer(customerDAO, email){
    return new Promise((resolve, reject) => {
        customerDAO.getOneCustomer(email, (error, sucess) => {
            if (error) 
                reject(error);
            resolve(sucess);
        })
    })
}

function saveCustomer(customer, customerDAO){
    return new Promise((resolve, reject) => {
        customerDAO.saveCustomer(customer, (error, sucess) => {
            if (error) 
                reject(error);
            resolve(sucess);
        })
    })
}

function updateCustomer(customer, customerDAO){
    return new Promise((resolve, reject) => {
        customerDAO.updateCustomer(customer, (error, sucess) => {
            if (error) 
                reject(error);
            resolve(sucess);
        })
    })
}