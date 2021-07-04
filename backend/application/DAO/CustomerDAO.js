function CustomerDAO(connection) {
    this._connection = connection;
}

CustomerDAO.prototype.saveCustomer = function(customer, callback) {
    // console.log(customer.id);
    // console.log(customer.customer_name);
    // console.log(customer.cellphone);
    // console.log(customer.email);
    // console.log(customer.customer_password);
    //let sql = 'INSERT INTO customers values(`id` = ?, `customer_name` = ?, `cellphone` = ?, `email` = ?, `customer_password` = ?)'
    let sql = 'INSERT INTO customers (id, customer_name, cellphone, email, customer_password) values(?, ?, ?, ?, ?)'
    let data = [customer.id, customer.customer_name, customer.cellphone, customer.email, customer.customer_password];
    //let data = [null, 'pedro2', '2132', 'dadasd', '12312']
    this._connection.query(sql, data, callback);
    //this._connection.query('INSERT INTO customers set = ?', customer, callback);

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