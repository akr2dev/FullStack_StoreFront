import {Request, Response, NextFunction} from "express";
import * as jwt from "jsonwebtoken";
import config from "config";
import {JwtPayload} from "jsonwebtoken";

// admin
export const authPermission = (req:Request, res:Response, nxt:NextFunction)=>{
    //check our custom auth header
    const token = req.header("x-auth-token");
    if(!token) return res.status(401).send("Access denied");
    try {
        const decodedPayload = jwt.verify(token, config.get("jwtsec")) as JwtPayload;
        //check user role
        if(!decodedPayload.isAdmin) return res.status(401).send("Access denied!");
        nxt();
    }
    catch (err) {
        res.status(400).send("Invalid token..!");
    }

}

// user
export const userPermission = (req:Request, res:Response, nxt:NextFunction) =>{
    const token = req.header("x-auth-token");
    if(!token) return res.status(401).send("Access denied");
    try {
        const decodedPayload = jwt.verify(token, config.get("jwtsec")) as JwtPayload;
        //get logged user id
        req.body.id = decodedPayload.userId;
        nxt();
    }
    catch (err) {
        res.status(400).send("Invalid token..!");
    }
}