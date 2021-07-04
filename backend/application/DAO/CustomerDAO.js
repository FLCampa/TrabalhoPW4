function CustomerDAO(connection) {
    this._connection = connection;
}

CustomerDAO.prototype.saveCustomer = function(customer, callback) {
    let sql = 'INSERT INTO customers (id, customer_name, cellphone, email, customer_password) values(?, ?, ?, ?, ?)'
    let data = [customer.id, customer.customer_name, customer.cellphone, customer.email, customer.customer_password];
    this._connection.query(sql, data, callback);
}

CustomerDAO.prototype.getOneCustomer = function(email, password, callback) {
    this._connection.query('SELECT * FROM customers WHERE email = ? AND customer_password = ?', [email, password], callback);
}

CustomerDAO.prototype.updateCustomer = function(customer, callback) {
    let sql = 'UPDATE customers SET customer_name = ?, cellphone = ?, customer_password = ? WHERE email = ?';
    let data = [customer.customer_name, customer.cellphone, customer.customer_password, customer.email];
    this._connection.query(sql, data, callback);
}

CustomerDAO.prototype.addMovieToCustomer = function(idMovie, callback){
    let sql = 'UPDATE customers set idMovie = ? WHERE email = ?';
    let data = [idMovie, 'pedroabdo2000@gmail.com'];
    this._connection.query(sql, data, callback);
}

module.exports = () => {
    return CustomerDAO;
}