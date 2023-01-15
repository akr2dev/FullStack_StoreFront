import {validator as productValid} from "../util/ProductValidator";
import {validator as categoryValid} from "../util/CategoryValidator";
import {validator as priceValid} from "../util/PriceValidator";
import {Request, NextFunction, Response} from "express";


export  const productMiddleware =  (req:Request, res:Response, nxt:NextFunction)=> {
    let valid:boolean = productValid(req.body);
    if(!valid) {
        res.status(403).send("forbidden command!");
        return;
    }
    nxt();
}

export  const categoryMiddleware =  (req:Request, res:Response, nxt:NextFunction)=> {
    let valid:boolean = categoryValid(req.params);
    if(!valid) {
        res.status(403).send("forbidden command!");
        return;
    }
    nxt();
}
export  const priceMiddleware =  (req:Request, res:Response, nxt:NextFunction)=> {
    let valid:boolean = priceValid(req.params);
    if(!valid) {
        res.status(403).send("forbidden command!");
        return;
    }
    nxt();
}