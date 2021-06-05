class Customer{
    id
    customer_name;
    cellphone;
    email;
    customer_password;

    constructor (id, customer_name, cellphone, email, customer_password){
        this.id = id;
        this.customer_name = customer_name;
        this.cellphone = cellphone;
        this.email = email;
        this.customer_password = customer_password;
    }

    setId(id){
        this.id = id;
    }

    getId(){
        return this.id;
    }

    setName(customer_name){
        this.customer_name = customer_name;
    }
    getName(){
        return this.name;
    }

    setCellphone(cellphone){
        this.cellphone = cellphone;
    }

    getCellphone(){
        return this.cellphone;
    }

    setEmail(email){
        this.email = email;
    }
    getEmail(){
        return this.email;
    }

    setPassword(customer_password){
        this.customer_password = customer_password;
    }

    getPassword(){
        return this.password;
    }
}

module.exports = () => {
    return Customer;
};