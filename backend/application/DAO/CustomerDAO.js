function CustomerDAO(connection) {
    this._connection = connection;
}

CustomerDAO.prototype.saveCustomer = function(customer, callback) {
    this._connection.query('INSERT INTO customers SET ?', customer, callback);
}

CustomerDAO.prototype.getOneCustomer = function(email, callback) {
    this._connection.query('SELECT * FROM customers WHERE email = ?', email, callback);
}

CustomerDAO.prototype.updateCustomer = function(customer, callback) {
    let sql = 'UPDATE customers SET customer_name = ?, cellphone = ?, customer_password = ? WHERE email = ?';
    let data = [customer.customer_name, customer.cellphone, customer.customer_password, customer.email];
    this._connection.query(sql, data, callback);
}

module.exports = () => {
    return CustomerDAO;
}