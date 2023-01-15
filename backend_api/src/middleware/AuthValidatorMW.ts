import {validator} from "../util/AuthValidataor";
import {Request, NextFunction, Response} from "express";


export  const authMiddleware =  (req:Request, res:Response, nxt:NextFunction)=> {
    console.log(req.body);
    let valid:boolean = validator(req.body);
    if(!valid) {
        res.status(403).send(`Invalid Inputs!`);
        return;
    }
    nxt();
}