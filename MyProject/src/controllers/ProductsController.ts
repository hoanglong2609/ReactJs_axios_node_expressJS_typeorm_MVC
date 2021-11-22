import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as express from "express";
import "reflect-metadata";
import {createConnection, QueryBuilder} from "typeorm";
import {Products} from "../entity/Products";

const productsService = require('../services/ProductsService')
class ProductsController {
  // Get/productId
  async index(req, res) {
    // createConnection().then(async connection => {
    // const productRepository = getRepository(Products);
    const limit = +req.query.limit;
    const offset = +req.query.offset;

    const responseData = await productsService.get(offset,limit);
    res.send(responseData)
    // console.log(limit,offset);
    // const builder = productRepository.createQueryBuilder();

    // const total = await builder.getCount();
    // const posts = await builder.offset(offset).limit(limit).getMany();

    // res.send({
    //     posts,
    //     total,
    // });


  }

  //get product/:id
  async show(req,res){
    // const productRepository = getRepository(Products);
    const productId = +req.params.id;
    const responseData = await productsService.getById(productId);
    res.send(responseData)
    // const results = await productRepository.findOne(productId);
    // res.send(results);
  }
}
  module.exports = new ProductsController;

