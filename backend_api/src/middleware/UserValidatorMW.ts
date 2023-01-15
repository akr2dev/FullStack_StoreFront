import {validator} from "../util/UserValidator";
import {Request, NextFunction, Response} from "express";


export  const userMiddleware =  (req:Request, res:Response, nxt:NextFunction)=> {
    let valid:boolean = validator(req.body);
    if(!valid) {
        res.status(403).send(`Invalid Inputs!`);
        return;
    }
    nxt();
}