drop database if exists burgers_db;
create database burgers_db;

use burgers_db;

create table  burgers(
id int auto_increment not null,
burger_name varchar(25) not null,
devoured boolean not null default 0,
date datetime null,
primary key(id)
);

insert into burgers (burger_name, devoured, date)
values ("triple bacon", false, date);

insert into burgers (burger_name, devoured, date)
values ("double cheese", false, date)