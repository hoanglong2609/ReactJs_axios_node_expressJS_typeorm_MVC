import * as express from "express";
import "reflect-metadata";
import {createConnection, QueryBuilder} from "typeorm";
import {Products} from "./entity/Products";
import {Request, Response} from "express";

createConnection().then(async connection => {
    const cors = require('cors')
    // const productRepository = connection.getRepository(Products);

    // create and setup express app
    const app = express();
    app.use(cors())
    app.use(express.json());
    const route = require('./routes')

    route(app);
    // app.get("/", async function(req: Request, res: Response) {
    //     const users = await productRepository.find();
    //     res.json(users);
    // });
    // app.get("/products", async function(req: Request, res: Response) {
    //     const limit = +req.query.limit;
    //     const offset = +req.query.offset;

    //     console.log(limit,offset);
    //     const builder = productRepository.createQueryBuilder();

    //     const total = await builder.getCount();
    //     const posts = await builder.offset(offset).limit(limit).getMany();

    //     res.send({
    //         posts,
    //         total,
    //     });
    // });

    // app.get("/products/:id", async function(req: Request, res: Response) {

    //     const productId = +req.params.id;
    //     const results = await productRepository.findOne(productId);
    //     res.send(results);
    // });
    app.listen(3600);
}).catch(error => console.log(error));
