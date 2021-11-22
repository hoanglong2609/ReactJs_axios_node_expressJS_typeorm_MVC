import * as express from "express";
import "reflect-metadata";
import {Products} from "../entity/Products";
import {Request, Response} from "express";
import {createConnection, QueryBuilder} from "typeorm";


const productsRoute = require('./products')

function route(app) {
  app.use('/products', productsRoute);
  

  

}

module.exports = route;