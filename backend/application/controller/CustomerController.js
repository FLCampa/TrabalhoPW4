module.exports.saveCustomer = async (server, req, res) => {
    let connection = server.application.config.dbConnection();
    let customerDAO = new server.application.DAO.CustomerDAO(connection);
    let customer = req.body;

    saveCustomer(customer, customerDAO).then(sucess => 
        res.status(200).json(sucess)
    ).catch(error => {
        res.status(430).json(error)
    })
    connection.end();
};

module.exports.loginCustomer = async (server, req, res) => {
    let email = req.params.email;
    let password = req.params.password;
    let connection = server.application.config.dbConnection();
    let customerDAO = new server.application.DAO.CustomerDAO(connection);
    let flagStatus = 200;
    let message;

    getOneCustomer(customerDAO, email, password).then(customer => {
        if (customer.length === 0){
            flagStatus = 400;
            message = {
                message:'Cliente não existe'
            }
        } else {
            message = customer;
        }
        res.status(flagStatus).json(message)
    }
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

module.exports.addMovieToCustomer = (server, req, res) => {
    let idMovie = req.params.idMovie;
    let connection = server.application.config.dbConnection();
    let customerDAO = new server.application.DAO.CustomerDAO(connection);
    addMovieToCustomer(idMovie, customerDAO).then(response => {
        res.status(200).json('Sucesso');
    })
    .catch(error => {
        res.status(400).json('Erro');
    })

}

function getOneCustomer(customerDAO, email, password){
    return new Promise((resolve, reject) => {
        customerDAO.getOneCustomer(email, password, (error, sucess) => {
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

function addMovieToCustomer(idMovie, customerDAO){
    return new Promise((resolve, reject) => {
        customerDAO.addMovieToCustomer(idMovie, (error, sucess) => {
            if (error) {
                reject(error);
                console.log(error);
            }
            resolve(sucess);
        })
    })
}