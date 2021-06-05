create database trabalhoPw4;
use trabalhoPW4;

create table customers (
	id int auto_increment primary key,
    customer_name varchar(100) not null,
    cellphone varchar(11) not null,
    email varchar(50) unique not null,
    customer_password varchar(50) not null
);