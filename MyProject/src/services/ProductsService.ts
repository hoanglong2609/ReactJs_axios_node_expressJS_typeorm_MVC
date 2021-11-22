import { Products } from "../entity/Products";
import { getRepository } from 'typeorm';
import { Request, Response } from 'express';

class ProductsService {

  async get(offset,limit) {

    const productRepository = getRepository(Products);
    try {
      const builder = productRepository.createQueryBuilder();

      const total = await builder.getCount();
      const posts = await builder.offset(offset).limit(limit).getMany();
      return {total,posts};
    } catch (error) {
        return null;
    }
  }

  async getById(productId) {

    const productRepository = getRepository(Products);
    try {
      const results = await productRepository.findOne(productId);
      return results
    } catch (error) {
        return null;
    }
  }
} 
module.exports = new ProductsService;